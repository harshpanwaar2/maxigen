import halalImg from "../../assets/certificate/halal.png";
import gmpImg from "../../assets/certificate/gmp.png";
import fdaImg from "../../assets/certificate/fda.png";
import thirdmg from "../../assets/certificate/thirdParty.png";
import ingridentImg from "../../assets/certificate/ingrident.png";
import gmoImg from "../../assets/certificate/gmo.png";

const Certifications = () => {
  const certificateData = [
    {
      logo: halalImg,
      title: "HALAL Certified",
      description: `Our products are HALAL certified, adhering to strict Islamic dietary laws.
This guarantees that every ingredient is sourced and processed with integrity.
The certification reflects our commitment to purity, ethics, and quality control,
making our products a trustworthy choice for consumers with diverse needs.`,
    },
    {
      logo: gmpImg,
      title: "GMP Certified",
      description: `We follow certified Good Manufacturing Practices (GMP) for superior quality.
This rigorous system governs every aspect of production, from staff training to facility hygiene.
It ensures that all processes are controlled to prevent contamination and errors,
guaranteeing a product that is consistent, safe, and effective in every batch.`,
    },
    {
      logo: fdaImg,
      title: "FDA Registered Facility",
      description: `Our state-of-the-art manufacturing facility is registered with the U.S. FDA.
This demonstrates our full compliance with stringent federal food safety regulations.
Being registered means we are subject to inspection and uphold total accountability,
providing you with the highest level of confidence in our production standards.`,
    },
    {
      logo: thirdmg,
      title: "Third-Party Tested",
      description: `Every product batch undergoes testing by an independent, third-party laboratory.
This provides an unbiased verification of our product's purity, potency, and safety.
It is your assurance that what is on the label is precisely what is in the product.
This commitment to transparency means you can trust our quality completely.`,
    },
    {
      logo: ingridentImg,
      title: "Premium International Ingredients",
      description: `We are dedicated to sourcing only the finest ingredients from around the world.
Our global suppliers are carefully selected for their commitment to quality and purity.
Each ingredient is chosen for its superior potency and proven effectiveness.
This global sourcing strategy results in a truly premium and powerful final product.`,
    },
    {
      logo: gmoImg,
      title: "Non-GMO & Pure",
      description: `Our products are formulated with a commitment to clean, natural ingredients.
They are certified to be free from Genetically Modified Organisms (Non-GMO).
Furthermore, they contain no banned substances, making them safe for all users.
This ensures you receive a pure, effective, and trustworthy supplement.`,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-4 text-center ">
          Quality & Trust You Can Count On
        </h2>
        <div className="w-50 h-1 bg-blue-500 flex  md:mx-0"></div>
        <div className="space-y-16">
          {certificateData.map((cert, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-6 rounded-lg ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Logo */}
              <div className="flex-shrink-0 h-32 w-32 md:h-40 md:w-40 rounded-full bg-white shadow-lg p-3 transition hover:scale-105">
                <img
                  src={cert.logo}
                  alt={`${cert.title} Logo`}
                  className="h-full w-full object-contain rounded-full"
                />
              </div>

              {/* Description */}
              <div className="flex-1 text-start  md:text-left capitalize max-w-5xl">
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                  {cert.title}
                </h3>
                <p className="text-gray-600   leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;
