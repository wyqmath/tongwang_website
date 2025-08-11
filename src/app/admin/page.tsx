"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  FileText, 
  Users, 
  Newspaper, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  BarChart3,
  Database
} from "lucide-react";

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center">
            <Settings className="mr-3 h-8 w-8" />
            Admin Panel
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your research group website content and settings
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <FileText className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold">29</div>
                <p className="text-xs text-muted-foreground">Publications</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Newspaper className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">News Articles</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Team Members</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <BarChart3 className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <div className="text-2xl font-bold">861</div>
                <p className="text-xs text-muted-foreground">Total Citations</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="publications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="publications" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Publications
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center">
              <Newspaper className="h-4 w-4 mr-2" />
              News
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Team
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Publications Tab */}
          <TabsContent value="publications" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Manage Publications</CardTitle>
                    <CardDescription>
                      Add, edit, or remove research publications
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Publication
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Real Publication Entry */}
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">Ab initio characterization of protein molecular dynamics with AI2BMD</h4>
                      <p className="text-sm text-muted-foreground">Wang, T., He, X., Li, M., Li, Y., Bi, R., Wang, Y., Cheng, C., Shen, X., Meng, J., Zhang, H., Liu, H., Wang, Z., Li, S., Shao, B., & Liu, T. Y. - 2024</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">Journal</Badge>
                        <Badge variant="outline">Nature</Badge>
                        <Badge variant="destructive">High Impact</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">Enhancing protein language models with structure-based encoder and pre-training</h4>
                      <p className="text-sm text-muted-foreground">Wang, T., Qiao, Y., Ding, W., Mao, W., Zhou, Y., & Gong, H. - 2023</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">Journal</Badge>
                        <Badge variant="outline">Nature Machine Intelligence</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Manage News</CardTitle>
                    <CardDescription>
                      Create and manage news articles and updates
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add News Article
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">


                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">Top 10 Advances in Chinese Bioinformatics for 2024</h4>
                      <p className="text-sm text-muted-foreground">Published: 2024</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="default">Featured</Badge>
                        <Badge variant="outline">Recognition</Badge>
                        <Badge variant="outline">Bioinformatics</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Manage Team Members</CardTitle>
                    <CardDescription>
                      Add, edit, or remove team member information
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Team Member
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">Tong Wang</h4>
                      <p className="text-sm text-muted-foreground">Principal Investigator</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="default">PI</Badge>
                        <Badge variant="outline">Current</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">Zhuoxuan Yang</h4>
                      <p className="text-sm text-muted-foreground">Laboratory Administrator</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">Admin</Badge>
                        <Badge variant="outline">Current</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Website Settings</CardTitle>
                <CardDescription>
                  Configure website settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Database className="h-4 w-4 mr-2" />
                    Database Connection
                  </h4>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">
                      ✅ Connected to Supabase database
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Site Configuration</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Site Title</label>
                      <input
                        type="text"
                        defaultValue="Tong Wang - Tsinghua University"
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Site Description</label>
                      <textarea
                        defaultValue="Research group focused on AI + Biomolecular Structure, Molecular Dynamics, Graph Neural Networks, and Drug Discovery at Tsinghua University"
                        className="w-full p-2 border rounded-md h-20"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>Save Settings</Button>
                  <Button variant="outline">Reset to Default</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
