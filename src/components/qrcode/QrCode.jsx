// Qrcode.jsx
import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import { Download, Share, X, Link } from "lucide-react";

const QrCode = ({ onClose }) => {
  const canvasRef = useRef(null);
  const URL = "https://spice-garden-qr-menu.netlify.app/";

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, URL, { width: 300 }, (error) => {
      if (error) console.error(error);
    });
  }, []);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const pngUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a"); // fixed "doccument" typo
    link.href = pngUrl;
    link.download = "Foodii-Restro-Qr-Menu.png";
    link.click();
  };

  const handleShare = async () => {
    const canvas = canvasRef.current;
    canvas.toBlob(async (blob) => {
      const file = new File([blob], "qr-code.png", { type: "image/png" });

      if (navigator.share) {
        try {
          await navigator.share({
            title: "QR Code Menu",
            text: "Scan this QR code to see the menu!",
            files: [file],
          });
        } catch (err) {
          console.error("Share failed:", err);
        }
      } else {
        alert("Sharing is not supported on this browser.");
      }
    });
  };

  return (
    <div className="w-[90vw] max-w-md flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg relative">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-4 right-4">
        <X size={28} />
      </button>

      {/* Header */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-bold">QR Code Menu</h2>
        <p className="text-sm text-gray-600">
          Scan this QR code with your phone to access our digital menu
        </p>
      </div>

      {/* QR Code */}
      <canvas ref={canvasRef}></canvas>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          className="flex items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-lg"
          onClick={handleDownload}
        >
          <Download size={16} /> Download
        </button>
        <button
          className="flex items-center gap-1 bg-green-500 text-white px-3 py-2 rounded-lg"
          onClick={handleShare}
        >
          <Share size={16} /> Share
        </button>
      </div>

      {/* URL */}
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <Link size={16} /> {URL}
      </div>
    </div>
  );
};

export default QrCode;
