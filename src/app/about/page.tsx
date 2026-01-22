"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { getAboutPIData } from "@/lib/data";
import { useAdmin, FloatingEditButton } from "@/components/admin";
import {
  PersonalInfoEditor,
  BiographyEditor,
  EducationEditor,
  AwardEditor,
} from "@/components/admin/editors/AboutEditors";
import type { AboutPIData, Education, Presentation, Lecture, Course, EducationItem, Award } from "@/types";

export default function AboutPage() {
  const { isDevMode } = useAdmin();
  const [data, setData] = useState<AboutPIData>(getAboutPIData());

  // Editing states
  const [editingPersonalInfo, setEditingPersonalInfo] = useState(false);
  const [editingBiography, setEditingBiography] = useState(false);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);
  const [editingHonor, setEditingHonor] = useState<{ index: number; value: string } | null>(null);

  // Refresh data callback
  const refreshData = useCallback(() => {
    setData(getAboutPIData());
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Left-Right Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 mb-12">
          <FloatingEditButton
            label="Edit Personal Info"
            onClick={() => setEditingPersonalInfo(true)}
            position="top-right"
          />
          {/* Left Side - Profile Photo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={data.photo}
              alt={data.name}
              width={300}
              height={375}
              className="w-full max-w-[300px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Information with Light Background */}
          <div className="bg-gray-50 rounded-lg p-8 space-y-6">
            {/* Name and Title */}
            <div>
              <h1 className="text-5xl font-bold mb-4">{data.name}</h1>

              <div className="space-y-2 text-lg leading-relaxed">
                {data.affiliations.map((aff, index) => (
                  <p key={index}>
                    {aff.role},{" "}
                    {aff.link ? (
                      <Link
                        href={aff.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 underline"
                      >
                        {aff.institution}
                      </Link>
                    ) : (
                      aff.institution
                    )}
                  </p>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-base">
              <p>
                <span className="font-semibold">Office Address: </span>
                <span className="text-muted-foreground">{data.contact.officeAddress}</span>
              </p>

              <p>
                <span className="font-semibold">Lab Address: </span>
                <span className="text-muted-foreground">{data.contact.labAddress}</span>
              </p>

              <p>
                <span className="font-semibold">Phone: </span>
                <span className="text-muted-foreground">{data.contact.phone}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Brief Bio */}
        <div className="relative mb-8">
          <FloatingEditButton
            label="Edit Biography"
            onClick={() => setEditingBiography(true)}
            position="top-right"
          />
          <h2 className="text-3xl font-bold mb-4">Brief Bio</h2>
          <div className="space-y-4">
            {data.briefBio.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Education and Background */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Education and Background</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-lg">{edu.position}</p>
                  <p className="text-base text-muted-foreground">{edu.institution}</p>
                  {edu.details && edu.details.map((detail, idx) => (
                    <p key={idx} className="text-base text-muted-foreground">{detail}</p>
                  ))}
                </div>
                <Badge variant="outline" className="text-base">{edu.period}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Honors, Rewards and Grants */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Honors, Rewards and Grants</h2>
          <div className="space-y-3">
            {data.honors.map((honor, index) => (
              <div key={index} className="border-b pb-2">
                <p className="text-base text-muted-foreground">{honor}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Presentations, Lectures and Courses */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Presentations, Lectures and Courses</h2>

          {/* A) Invited Presentations at Conferences */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Invited Presentations at Conferences</h3>
            <div className="space-y-4">
              {data.presentations.map((pres) => (
                <div key={pres.id} className="border-b pb-3">
                  <p className="text-base font-medium mb-2">{pres.conference}</p>
                  <p className="text-sm text-muted-foreground mb-1">{pres.location}</p>
                  <p className="text-sm italic">{pres.topic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* B) Invited Lectures at Institutions */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Invited Lectures at Institutions</h3>
            <div className="space-y-4">
              {data.lectures.map((lec) => (
                <div key={lec.id} className="border-b pb-3">
                  <p className="text-base font-medium mb-2">{lec.institution}</p>
                  <p className="text-sm italic">{lec.topic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* C) Teaching */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Courses</h3>
            <div className="space-y-3">
              {data.courses.map((course) => (
                <div key={course.id} className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-base font-medium">{course.name}</p>
                    {course.note && (
                      <p className="text-sm text-muted-foreground mt-1">{course.note}</p>
                    )}
                  </div>
                  <Badge variant="outline" className="text-base">{course.semester}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Committees/Professional Groups/Services */}
        {/*
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🤝</span>
              Committees/Professional Groups/Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Professional</Badge>
                  Membership
                </h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-lg">Coming Soon</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Editorial</Badge>
                  Editorship
                </h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-lg">Coming Soon</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Leadership</Badge>
                  Conference Chairs/Keynote/Plenary Speakers
                </h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-lg">Coming Soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        */}

        


      </div>

      {/* Edit Modals */}
      {isDevMode && (
        <>
          <PersonalInfoEditor
            isOpen={editingPersonalInfo}
            onClose={() => setEditingPersonalInfo(false)}
            initialData={{
              name: data.name,
              title: data.affiliations[0]?.role || '',
              position: data.affiliations[0]?.role || '',
              affiliation: data.affiliations[0]?.institution || '',
              location: data.contact.officeAddress,
              avatar: data.photo,
            }}
            onSave={refreshData}
          />
          <BiographyEditor
            isOpen={editingBiography}
            onClose={() => setEditingBiography(false)}
            initialData={data.briefBio}
            onSave={refreshData}
          />
        </>
      )}
    </div>
  );
}
