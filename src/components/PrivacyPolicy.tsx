import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-green-400">Politique de confidentialité</h1>
      <p className="mb-4 text-gray-300">
        FitnessByStef respecte votre vie privée. Les données collectées sur ce site sont uniquement utilisées pour améliorer votre expérience et ne sont jamais revendues.
      </p>
      <p className="mb-4 text-gray-300">
        En utilisant ce site, vous consentez à la collecte des données suivantes : adresse IP à des fins statistiques et anonymes, données que vous saisissez dans un formulaire de contact (nom, adresse mail, message).
      </p>
      <p className="mb-4 text-gray-300">
        Vous avez le droit d'accéder, de modifier ou de supprimer vos données en envoyant un mail à <a className="text-green-400 underline" href="mailto:contact@fitnessbystef.fr">contact@fitnessbystef.fr</a>.
      </p>
      <p className="mb-4 text-gray-300">
        Aucune donnée personnelle n’est conservée sans votre accord explicite. Aucune donnée n’est transmise à des tiers.
      </p>
      <p className="text-gray-500 text-sm mt-10">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
