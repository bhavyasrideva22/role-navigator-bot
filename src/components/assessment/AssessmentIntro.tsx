import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap, Brain, Heart } from "lucide-react";

interface AssessmentIntroProps {
  onStart: () => void;
}

export default function AssessmentIntro({ onStart }: AssessmentIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8 animate-fade-in">
        <div className="text-center text-white space-y-4">
          <h1 className="text-5xl font-bold mb-4">
            Is Implementation Specialist the Right Fit for You?
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover if you have what it takes to bridge technology and communication in this dynamic career path.
          </p>
        </div>

        <Card className="shadow-card border-none bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">
              🎯 About This Assessment
            </CardTitle>
            <CardDescription className="text-lg">
              A comprehensive evaluation designed to measure your fit for implementation roles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  What Does an Implementation Specialist Do?
                </h3>
                <p className="text-muted-foreground">
                  Implementation Specialists deploy software solutions for customers post-sale, 
                  acting as the bridge between technical teams and clients to ensure proper 
                  configuration, integration, and adoption.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Career Opportunities
                </h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Implementation Specialist</li>
                  <li>• Solutions Consultant</li>
                  <li>• Technical Account Manager</li>
                  <li>• Systems Integrator</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Key Success Traits
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Brain className="w-4 h-4 text-accent" />
                  Analytical thinking
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-4 h-4 text-accent" />
                  Strong communication
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Zap className="w-4 h-4 text-accent" />
                  Technical fluency
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                ⏱️ <strong>Duration:</strong> 25-30 minutes | 
                📊 <strong>Questions:</strong> 16 comprehensive assessments | 
                🎯 <strong>Result:</strong> Personalized career recommendations
              </p>
              <Button 
                size="lg" 
                variant="hero" 
                onClick={onStart}
                className="text-lg px-8 py-6 h-auto animate-pulse-glow"
              >
                Start Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}