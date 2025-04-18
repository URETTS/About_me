import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import experienceData from '../data/experience';
import type { ExperienceItem } from '../data/experience';


const Experience = () => {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleDescription = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Briefcase className="w-6 h-6" />
        {t('nav.experience')}
      </h1>
      <div className="space-y-6">
        {experienceData.map((exp: ExperienceItem, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 border border-gray-200 rounded-2xl shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{exp.title}</h2>
                <p className="text-indigo-700 font-semibold">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period} · {exp.location}</p>
              </div>
              <button
                onClick={() => toggleDescription(index)}
                className="text-gray-600 hover:text-gray-800"
              >
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            {openIndex === index && (
              <div className="mt-3 text-gray-800">
                {exp.description && (
                  <p className="whitespace-pre-line mb-2">
                    {typeof exp.description === 'object'
                      ? exp.description[i18n.language] || exp.description['en']
                      : exp.description}
                  </p>
                )}
                {exp.skills && (
                  <p className="text-sm text-gray-600">{exp.skills}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
