import { Star } from "lucide-react";
import { useState } from "react";

export default function FeedbackForm({ analyseId }: { analyseId: number }) {
  const [designRating, setDesignRating] = useState(0);
  const [dataRating, setDataRating] = useState(0);
  const [recommendation, setRecommendation] = useState<"oui" | "non" | null>(
    null
  );
  const [remarks, setRemarks] = useState("");
  const [loading, setLoading] = useState(false);

  const renderStars = (
    currentRating: number,
    onSelect: (rating: number) => void
  ) => (
    <div className="flex gap-1 mt-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onSelect(star)}
          className="transition"
        >
          <Star
            className={`w-6 h-6 ${
              star <= currentRating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          analyseId,
          designRating,
          dataRating,
          recommendation,
          remarks,
        }),
      });

      if (res.ok) {
        setDesignRating(0);
        setDataRating(0);
        setRecommendation(null);
        setRemarks("");
      } else {
        alert("Erreur lors de l'envoi de l'avis ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Impossible d'envoyer votre avis ❌");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-20">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Votre avis compte et nous permet d'améliorer l'outil 🙏
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm font-medium text-gray-700">
            Design de l'application
          </p>
          {renderStars(designRating, setDesignRating)}
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700">
            Pertinence des données
          </p>
          {renderStars(dataRating, setDataRating)}
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700">
            Recommanderiez-vous l'application ?
          </p>
          <div className="flex gap-4 mt-1">
            <button
              onClick={() => setRecommendation("oui")}
              className={`px-3 py-1 rounded ${
                recommendation === "oui"
                  ? "bg-green-500 text-white"
                  : "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              Oui
            </button>
            <button
              onClick={() => setRecommendation("non")}
              className={`px-3 py-1 rounded ${
                recommendation === "non"
                  ? "bg-red-500 text-white"
                  : "bg-red-100 text-red-700 hover:bg-red-200"
              }`}
            >
              Non
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">
            Remarques supplémentaires (optionnel)
          </label>
          <textarea
            rows={3}
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            placeholder="Votre retour..."
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
      >
        {loading ? "Envoi en cours..." : "Envoyer mon avis"}
      </button>
    </div>
  );
}
