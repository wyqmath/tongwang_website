"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Briefcase } from "lucide-react";
import Link from "next/link";
import { getPeopleData } from "@/lib/data";
import { useAdmin, FloatingEditButton } from "@/components/admin";
import { TeamMemberEditor, JoinTeamEditor } from "@/components/admin/editors/PeopleEditors";
import GroupPhotoCarousel from "@/components/GroupPhotoCarousel";
import type { TeamMember, PeopleData } from "@/types";

// Member component
function MemberProfile({
  member,
  onEdit
}: {
  member: TeamMember;
  onEdit?: () => void;
}) {
  return (
    <div className="relative flex gap-8 mb-16">
      {onEdit && (
        <FloatingEditButton
          label="Edit Member"
          onClick={onEdit}
          position="top-right"
        />
      )}
      {/* Photo */}
      <div className="flex-shrink-0">
        <div className="relative w-[240px] h-[320px] bg-gray-100 rounded-sm overflow-hidden">
          <Image
            src={member.photo}
            alt={member.name}
            width={240}
            height={320}
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
      </div>
    </div>
  );
}

export default function TeamPage() {
  const { isDevMode } = useAdmin();
  const [peopleData, setPeopleData] = useState<PeopleData>(getPeopleData());
  const { members, joinTeam } = peopleData;

  // Editing states
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [editingJoinTeam, setEditingJoinTeam] = useState(false);

  // Refresh data callback
  const refreshData = useCallback(() => {
    setPeopleData(getPeopleData());
  }, []);

  // 按类别分组成员
  const raOrInternMembers = members.filter(m => m.category === 'ra_or_intern');
  const postdocMembers = members.filter(m => m.category === 'postdoc');
  const phdMembers = members.filter(m => m.category === 'phd');

  // 合照数据
  const groupPhotos = [
    {
      src: "/group/2026-1-23.png",
      alt: "23 January 2026",
    }
  ];

  return (
    <div>
      {/* Group Photo Carousel - Full Width */}
      <GroupPhotoCarousel photos={groupPhotos} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">

        {/* Postdoctoral Researchers Section */}
        {postdocMembers.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10">Postdoctoral Researchers</h2>
            {postdocMembers.map((member) => (
              <MemberProfile
                key={member.id}
                member={member}
                onEdit={isDevMode ? () => setEditingMember(member) : undefined}
              />
            ))}
          </section>
        )}

        {/* Ph.D. Students Section */}
        {phdMembers.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10">Ph.D. Students</h2>
            {phdMembers.map((member) => (
              <MemberProfile
                key={member.id}
                member={member}
                onEdit={isDevMode ? () => setEditingMember(member) : undefined}
              />
            ))}
          </section>
        )}

        {/* RA or Intern Section */}
        {raOrInternMembers.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10">RA or Intern</h2>
            {raOrInternMembers.map((member) => (
              <MemberProfile
                key={member.id}
                member={member}
                onEdit={isDevMode ? () => setEditingMember(member) : undefined}
              />
            ))}
          </section>
        )}

        {/* Join Our Team Section */}
        <section className="relative text-center bg-gray-50 rounded-lg p-12 mt-16">
          {isDevMode && (
            <FloatingEditButton
              label="Edit Join Team"
              onClick={() => setEditingJoinTeam(true)}
              position="top-right"
            />
          )}
          <h2 className="text-2xl font-bold mb-4">{joinTeam.title}</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {joinTeam.description}
          </p>
          <div className="flex justify-center space-x-4">
            <Link href={joinTeam.buttonLink}>
              <Button size="lg">
                <Briefcase className="mr-2 h-4 w-4" />
                {joinTeam.buttonText}
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

      {/* Edit Modals */}
      {isDevMode && (
        <>
          {editingMember && (
            <TeamMemberEditor
              isOpen={!!editingMember}
              onClose={() => setEditingMember(null)}
              initialData={editingMember}
              onSave={refreshData}
            />
          )}
          <JoinTeamEditor
            isOpen={editingJoinTeam}
            onClose={() => setEditingJoinTeam(false)}
            initialData={joinTeam}
            onSave={refreshData}
          />
        </>
      )}
    </div>
  );
}
