
import { certifications } from "../data/certifications";
import {
  FiArrowUpRight,
  FiDownload,
  FiExternalLink,
  FiAward,
} from "react-icons/fi";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <div className="mb-16">
          <p className="uppercase text-blue-400 tracking-[5px] text-sm mb-6">
            Credentials & Achievements
          </p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="uppercase text-4xl md:text-5xl font-bold">
                Certifications
              </h2>

              <p className="text-white/50 mt-5 max-w-xl leading-relaxed">
                Professional certifications and continuous learning
                milestones that reflect my technical growth and commitment
                to development.
              </p>
            </div>

            <div className="flex items-center gap-3 text-white/50">
              <FiAward className="text-blue-400 text-xl" />
              <span className="text-sm">
                {certifications.length} Credentials
              </span>
            </div>
          </div>
        </div>

        {/* Certificate cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((certificate) => (
            <article
              key={certificate.id}
              className="group glass border border-white/10 rounded-3xl overflow-hidden hover:border-blue-400/40 transition duration-500"
            >
              {/* Certificate image */}
              <div className="relative overflow-hidden bg-white/5 aspect-[1.4/1]">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full text-sm font-medium hover:bg-blue-400 transition"
                  >
                    View Certificate
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>

              {/* Certificate details */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-blue-400 text-xs uppercase tracking-wider">
                      {certificate.issuer}
                    </p>

                    <h3 className="text-xl font-semibold mt-2 leading-snug">
                      {certificate.title}
                    </h3>
                  </div>

                  <FiAward className="text-blue-400 text-2xl shrink-0" />
                </div>

                <p className="text-white/50 text-sm leading-relaxed mt-4">
                  {certificate.description}
                </p>

                {/* Issue date */}
                {certificate.issueDate && (
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      Date Issued
                    </p>

                    <p className="text-white/80 text-sm mt-2">
                      {certificate.issueDate}
                    </p>
                  </div>
                )}

                {/* Skills */}
                {certificate.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 rounded-full bg-white/[0.05] border border-white/10 text-white/60 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Credential ID */}
                {certificate.credentialId && (
                  <div className="mt-5">
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      Credential ID
                    </p>

                    <p className="text-white/70 text-xs mt-2 break-all">
                      {certificate.credentialId}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 mt-7 pt-5 border-t border-white/10">

                  {certificate.pdf && (
                    <>
                      <a
                        href={certificate.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-white text-black rounded-full px-4 py-3 text-sm font-medium hover:bg-blue-400 transition"
                      >
                        View
                        <FiArrowUpRight />
                      </a>

                      <a
                        href={certificate.pdf}
                        download
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:bg-white/10 hover:text-white transition"
                        aria-label={`Download ${certificate.title}`}
                        title="Download certificate"
                      >
                        <FiDownload />
                      </a>
                    </>
                  )}

                  {certificate.verificationUrl && (
                    <a
                      href={certificate.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full border border-white/15 text-white/70 hover:bg-white/10 hover:text-white transition"
                      aria-label={`Verify ${certificate.title}`}
                      title="Verify credential"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {certifications.length === 0 && (
          <p className="text-white/40 text-center py-16">
            Certifications will be displayed here.
          </p>
        )}

      </div>
    </section>
  );
}
