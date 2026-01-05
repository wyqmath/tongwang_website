import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase } from "lucide-react";
import Link from "next/link";

// Team member data structure
interface TeamMember {
  name: string;
  title?: string;
  degree?: string;
  photo: string;
  intro: string;
  email?: string;
  photoWidth?: number;
  photoHeight?: number;
}

// Sample data - replace with actual data
const labAdmin: TeamMember = {
  name: "Zhuoxuan Yang",
  photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='320'%3E%3Crect width='240' height='320' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='Arial, sans-serif'%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E",
  photoWidth: 240,
  photoHeight: 320,
  intro: "Laboratory administrator responsible for managing lab operations, coordinating research activities, and supporting team members. Research focuses on AI-assisted biomolecular structure prediction and computational methods for protein-ligand interaction analysis.",
  email: "yangzx@example.com"
};

const phdStudents: TeamMember[] = [
  {
    name: "Coming Soon",
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='320'%3E%3Crect width='240' height='320' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='Arial, sans-serif'%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E",
    photoWidth: 240,
    photoHeight: 320,
    intro: "Coming Soon"
  },
  {
    name: "Coming Soon",
    photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='320'%3E%3Crect width='240' height='320' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='16' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='Arial, sans-serif'%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E",
    photoWidth: 240,
    photoHeight: 320,
    intro: "Coming Soon"
  }
];

// Member component
function MemberProfile({ member }: { member: TeamMember }) {
  return (
    <div className="flex gap-8 mb-16">
      {/* Photo */}
      <div className="flex-shrink-0">
        <div className="relative w-[240px] h-[320px] bg-gray-100 rounded-sm overflow-hidden">
          <Image
            src={member.photo}
            alt={member.name}
            width={member.photoWidth || 240}
            height={member.photoHeight || 320}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-1">
          {member.name}
          {member.degree && <span className="font-normal">, {member.degree}</span>}
        </h3>
        {member.title && (
          <p className="text-lg text-gray-600 mb-4">{member.title}</p>
        )}
        <div className="text-gray-700 leading-relaxed text-justify">
          {member.intro}
        </div>
        {member.email && (
          <div className="mt-4 flex items-center text-sm text-gray-600">
            <Mail className="h-4 w-4 mr-2" />
            <a href={`mailto:${member.email}`} className="hover:text-blue-600">
              {member.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Lab Administrator Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Lab Administrator</h2>
          <MemberProfile member={labAdmin} />
        </section>

        {/* Ph.D. Students Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Ph.D. Students</h2>
          <div>
            {phdStudents.map((student, index) => (
              <MemberProfile key={index} member={student} />
            ))}
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="text-center bg-gray-50 rounded-lg p-12 mt-16">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We are always looking for motivated students and researchers to join our group.
            If you are passionate about machine learning and AI research, we would love to hear from you.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/positions">
              <Button size="lg">
                <Briefcase className="mr-2 h-4 w-4" />
                Open Positions
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
