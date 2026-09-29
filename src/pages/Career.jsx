import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  X, 
  Send, 
  Award,
  Users,
  HeartHandshake
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { jobOpenings } from '../data/careers';

export default function Career() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolioUrl: '',
    coverNote: ''
  });

  const perks = [
    {
      icon: Award,
      title: "Impactful National Mission",
      desc: "Contribute directly to Bangladesh's national food self-sufficiency, farmer prosperity, and agricultural advancement."
    },
    {
      icon: Users,
      title: "Collaborative Science Culture",
      desc: "Work side-by-side with leading plant breeders, soil nutritionists, and veteran agribusiness executives."
    },
    {
      icon: HeartHandshake,
      title: "Growth & Welfare",
      desc: "Competitive compensation, performance incentives, provident fund, medical insurance, and ongoing capacity building."
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    // Save to localStorage
    const applications = JSON.parse(localStorage.getItem('dhali_job_applications') || '[]');
    applications.push({
      id: 'job_app_' + Date.now(),
      jobId: selectedJob.id,
      jobTitle: selectedJob.title,
      ...applicant,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('dhali_job_applications', JSON.stringify(applications));

    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setSelectedJob(null);
      setApplicant({
        name: '',
        email: '',
        phone: '',
        experience: '',
        portfolioUrl: '',
        coverNote: ''
      });
    }, 2500);
  };

  return (
    <div className="bg-agro-offwhite min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-agro-forest uppercase tracking-wider mb-3">
            <Briefcase size={14} /> Careers at Dhali Agro
          </span>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-agro-charcoal mb-4">
            Grow Your Career With Purpose
          </h1>
          <p className="text-agro-muted text-base md:text-lg">
            Join our multidisciplinary team of agronomists, researchers, supply chain professionals, and field officers transforming Bangladesh&apos;s agricultural landscape.
          </p>
        </div>

        {/* Culture / Perks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-agro-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-agro-forest flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold font-heading text-agro-charcoal mb-2">
                  {perk.title}
                </h3>
                <p className="text-xs md:text-sm text-agro-muted leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Job Openings Section */}
        <div className="mb-20">
          <SectionTitle
            subtitle="Current Openings"
            title="Available Positions"
            description="Explore our active vacancies across headquarters, regional branches, and field research facilities."
            align="center"
          />

          <div className="space-y-6 mt-10 max-w-4xl mx-auto">
            {jobOpenings.map(job => (
              <div 
                key={job.id}
                className="bg-white rounded-2xl p-6 md:p-8 border border-agro-border hover:border-agro-leaf transition-all duration-300 shadow-sm hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-agro-muted mb-2 font-medium">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-agro-forest font-semibold uppercase">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-agro-leaf" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-agro-leaf" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1 text-red-600 font-semibold">
                      <Calendar size={13} /> Deadline: {job.deadline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-agro-charcoal mb-2">
                    {job.title}
                  </h3>

                  <p className="text-xs md:text-sm text-agro-muted leading-relaxed max-w-2xl mb-4">
                    {job.description}
                  </p>

                  <div className="space-y-1">
                    <span className="text-xs font-bold text-agro-charcoal uppercase tracking-wider block">
                      Core Requirements:
                    </span>
                    <ul className="text-xs text-agro-muted list-disc list-inside space-y-0.5">
                      {job.requirements.slice(0, 2).map((req, rIdx) => (
                        <li key={rIdx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="btn-primary text-xs py-2.5 px-5 flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    Apply Now <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spontaneous Application Banner */}
        <div className="bg-gradient-to-r from-agro-dark to-agro-forest rounded-2xl p-8 md:p-10 text-white text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-heading mb-3">
            Don&apos;t See the Right Role For You?
          </h3>
          <p className="text-white/80 text-sm max-w-xl mx-auto mb-6">
            We are always seeking passionate agricultural researchers, field agronomists, and digital specialists. Send your CV directly to our HR team.
          </p>
          <a
            href="mailto:careers@dhaliagro.com?subject=Spontaneous%20Job%20Application%20-%20Dhali%20Agro"
            className="btn-accent inline-flex items-center gap-2 text-xs md:text-sm"
          >
            Email CV to careers@dhaliagro.com
          </a>
        </div>

        {/* Application Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 border border-agro-border shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-agro-muted hover:text-agro-charcoal"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-agro-forest">
                  Application Form
                </span>
                <h3 className="text-xl font-bold font-heading text-agro-charcoal mt-1">
                  {selectedJob.title}
                </h3>
                <p className="text-xs text-agro-muted">
                  {selectedJob.location} • {selectedJob.type}
                </p>
              </div>

              {applySuccess ? (
                <div className="p-6 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <CheckCircle size={40} className="mx-auto text-agro-leaf" />
                  <h4 className="text-base font-bold text-agro-forest">Application Submitted!</h4>
                  <p className="text-xs text-agro-muted">
                    Thank you for applying to Dhali Agro. Our HR talent team will review your credentials and get in touch if shortlisted.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicant.name}
                      onChange={e => setApplicant({...applicant, name: e.target.value})}
                      placeholder="e.g. Md. Tanvir Ahmed"
                      className="w-full px-3.5 py-2 rounded-lg border border-agro-border text-xs focus:outline-none focus:border-agro-leaf"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicant.email}
                        onChange={e => setApplicant({...applicant, email: e.target.value})}
                        placeholder="tanvir@example.com"
                        className="w-full px-3.5 py-2 rounded-lg border border-agro-border text-xs focus:outline-none focus:border-agro-leaf"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicant.phone}
                        onChange={e => setApplicant({...applicant, phone: e.target.value})}
                        placeholder="+880 17XX XXXXXX"
                        className="w-full px-3.5 py-2 rounded-lg border border-agro-border text-xs focus:outline-none focus:border-agro-leaf"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                      Years of Relevant Experience *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicant.experience}
                      onChange={e => setApplicant({...applicant, experience: e.target.value})}
                      placeholder="e.g. 3 years in agronomic sales"
                      className="w-full px-3.5 py-2 rounded-lg border border-agro-border text-xs focus:outline-none focus:border-agro-leaf"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                      CV Link / LinkedIn Profile URL
                    </label>
                    <input
                      type="url"
                      value={applicant.portfolioUrl}
                      onChange={e => setApplicant({...applicant, portfolioUrl: e.target.value})}
                      placeholder="https://linkedin.com/in/... or Google Drive link"
                      className="w-full px-3.5 py-2 rounded-lg border border-agro-border text-xs focus:outline-none focus:border-agro-leaf"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-agro-charcoal mb-1">
                      Brief Cover Note / Motivation
                    </label>
                    <textarea
                      rows={3}
                      value={applicant.coverNote}
                      onChange={e => setApplicant({...applicant, coverNote: e.target.value})}
                      placeholder="Why would you like to join Dhali Agro in this role?"
                      className="w-full px-3.5 py-2 rounded-lg border border-agro-border text-xs focus:outline-none focus:border-agro-leaf"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-2.5 flex items-center justify-center gap-2 text-xs"
                  >
                    <Send size={14} /> Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
