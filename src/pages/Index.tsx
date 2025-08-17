import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Target, Users, Zap, CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <Badge variant="secondary" className="text-primary bg-white/90 text-sm px-4 py-2">
            Career Assessment Platform
          </Badge>
          
          <h1 className="text-6xl font-bold leading-tight">
            Discover Your Perfect
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Career Path
            </span>
          </h1>
          
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Take our comprehensive AI-powered assessment to find out if Implementation Specialist 
            is the right career fit for you. Get personalized insights and actionable next steps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => navigate('/assessment')}
              className="text-lg px-8 py-6 h-auto group"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-4 h-4" />
              <span className="text-sm">25-30 minutes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Take Our Assessment?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our scientifically-backed evaluation uses proven frameworks to give you accurate, actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Psychometric Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Evaluate personality traits, work style, and psychological fit for implementation roles.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Technical Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Assess your current technical knowledge and problem-solving abilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">WISCAR Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive evaluation of Will, Interest, Skill, Cognitive ability, and more.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Personalized Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get detailed feedback, strengths, challenges, and tailored next steps.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* What You'll Get */}
          <Card className="max-w-4xl mx-auto shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">What You'll Discover</CardTitle>
              <CardDescription className="text-lg">
                Comprehensive insights to guide your career decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Career Fit Score</h4>
                      <p className="text-sm text-muted-foreground">
                        Numerical assessment of your alignment with Implementation Specialist roles
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Skill Gap Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        Identify specific areas for improvement and development
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Learning Roadmap</h4>
                      <p className="text-sm text-muted-foreground">
                        Structured path with courses, resources, and milestones
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Alternative Paths</h4>
                      <p className="text-sm text-muted-foreground">
                        Related career options if Implementation isn't the perfect fit
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Industry Insights</h4>
                      <p className="text-sm text-muted-foreground">
                        Current market trends and opportunity analysis
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Next Steps Plan</h4>
                      <p className="text-sm text-muted-foreground">
                        Actionable recommendations for immediate progress
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => navigate('/assessment')}
              className="text-lg px-12 py-6 h-auto animate-pulse-glow"
            >
              Begin Your Career Journey
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Free assessment • No registration required • Instant results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
