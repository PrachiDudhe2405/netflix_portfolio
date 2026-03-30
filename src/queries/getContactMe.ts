// queries/getContactMe.ts
import { ContactMe } from '../types';

const STATIC_CONTACT: ContactMe = {
  profilePicture: { url: '' },
  name: 'Prachi Hemant Dudhe',
  title: 'Data Scientist • AI Systems • Decision Analytics',
  summary: "I build data and AI systems that are measurable, reliable, and useful to decision-makers. My recent work includes hybrid RAG pipelines for agricultural analytics, controlled reinforcement learning experiments, and computer vision projects focused on evaluation, robustness, and real-world impact.",
  companyUniversity: 'Texas A&M University, Texas, USA',
  linkedinLink: 'https://www.linkedin.com/in/prachi-dudhe',
  email: 'pra24@tamu.edu',
  phoneNumber: '(979) 721-2564'
};

export async function getContactMe(): Promise<ContactMe> {
  return STATIC_CONTACT;
}
