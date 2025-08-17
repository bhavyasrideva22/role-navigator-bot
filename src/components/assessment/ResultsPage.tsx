import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, XCircle, BookOpen, Users, Target, TrendingUp } from "lucide-react";
import type { AssessmentScores } from "@/hooks/useAssessment";

interface ResultsPageProps {
  scores: AssessmentScores;
  onRestart: () => void;
}

export default function ResultsPage({ scores, onRestart }: ResultsPageProps) {
  const getRecommendation = () => {
    if (scores.confidence_score >= 80) {
      return {
        status: "YES",
        title: "Excellent Fit!",
        description: "You show strong alignment with Implementation Specialist roles",
        icon: CheckCircle2,
        color: "success"
      };
    } else if (scores.confidence_score >= 60) {
      return {
        status: "MAYBE",
        title: "Promising with Preparation",
        description: "You have potential but may need skill development in specific areas",
        icon: AlertCircle,
        color: "warning"
      };
    } else {
      return {
        status: "NO",
        title: "Consider Alternative Paths",
        description: "You might be better suited for adjacent roles or need significant upskilling",
        icon: XCircle,
        color: "destructive"
      };
    }
  };

  const recommendation = getRecommendation();
  const RecommendationIcon = recommendation.icon;

  const getStrengths = () => {
    const strengths = [];
    if (scores.psychological_fit >= 75) strengths.push("Strong psychological alignment");
    if (scores.technical_readiness >= 75) strengths.push("Good technical foundation");
    if (scores.wiscar.will >= 80) strengths.push("High motivation and commitment");
    if (scores.wiscar.interest >= 80) strengths.push("Strong interest in the field");
    if (scores.wiscar.ability_to_learn >= 75) strengths.push("Good learning capacity");
    return strengths;
  };

  const getChallenges = () => {
    const challenges = [];
    if (scores.psychological_fit < 60) challenges.push("Personality fit needs attention");
    if (scores.technical_readiness < 60) challenges.push("Technical skills need development");
    if (scores.wiscar.skill < 60) challenges.push("Core implementation skills require building");
    if (scores.wiscar.cognitive < 60) challenges.push("Problem-solving approach needs refinement");
    return challenges;
  };

  const getNextSteps = () => {
    if (recommendation.status === "YES") {
      return [
        "Enroll in Implementation Fundamentals course",
        "Learn CRM tools (Salesforce, HubSpot)",
        "Shadow onboarding sessions",
        "Practice technical communication"
      ];
    } else if (recommendation.status === "MAYBE") {
      return [
        "Strengthen identified gaps through targeted learning",
        "Take CRM training courses",
        "Improve communication workshops",
        "Gain experience with business analysis"
      ];
    } else {
      return [
        "Explore Technical Project Coordinator roles",
        "Consider Customer Support Engineer positions",
        "Look into QA Analyst opportunities",
        "Develop foundational technical skills"
      ];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-4">
      <div className="max-w-6xl mx-auto space-y-8 py-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Assessment Results</h1>
          <p className="text-xl text-muted-foreground">
            Implementation Specialist Career Fit Analysis
          </p>
        </div>

        {/* Main Recommendation */}
        <Card className="shadow-elegant border-none bg-gradient-card">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className={`p-4 rounded-full ${
                recommendation.color === 'success' ? 'bg-success/10' :
                recommendation.color === 'warning' ? 'bg-warning/10' : 
                'bg-destructive/10'
              }`}>
                <RecommendationIcon className={`w-12 h-12 ${
                  recommendation.color === 'success' ? 'text-success' :
                  recommendation.color === 'warning' ? 'text-warning' : 
                  'text-destructive'
                }`} />
              </div>
            </div>
            <div>
              <Badge 
                variant={recommendation.color === 'success' ? 'default' : 'secondary'}
                className="text-lg px-4 py-2"
              >
                {recommendation.status}
              </Badge>
              <CardTitle className="text-2xl mt-2">{recommendation.title}</CardTitle>
              <CardDescription className="text-lg">{recommendation.description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {Math.round(scores.confidence_score)}%
            </div>
            <p className="text-muted-foreground">Overall Confidence Score</p>
          </CardContent>
        </Card>

        {/* Detailed Scores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Psychological Fit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={scores.psychological_fit} className="h-3" />
                <p className="text-2xl font-bold">{Math.round(scores.psychological_fit)}%</p>
                <p className="text-sm text-muted-foreground">
                  Personality and work style alignment
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Technical Readiness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={scores.technical_readiness} className="h-3" />
                <p className="text-2xl font-bold">{Math.round(scores.technical_readiness)}%</p>
                <p className="text-sm text-muted-foreground">
                  Current technical knowledge and aptitude
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Learning Ability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={scores.wiscar.ability_to_learn} className="h-3" />
                <p className="text-2xl font-bold">{Math.round(scores.wiscar.ability_to_learn)}%</p>
                <p className="text-sm text-muted-foreground">
                  Capacity for skill development
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* WISCAR Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>WISCAR Framework Analysis</CardTitle>
            <CardDescription>
              Comprehensive evaluation across six key dimensions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(scores.wiscar).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium capitalize">
                      {key.replace('_', ' ')}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {Math.round(value)}%
                    </span>
                  </div>
                  <Progress value={value} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strengths and Challenges */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-success flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Your Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {getStrengths().map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-warning flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Areas for Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {getChallenges().map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Recommended Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {getNextSteps().map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="text-center space-y-4">
          <Button onClick={onRestart} variant="outline" size="lg">
            Take Assessment Again
          </Button>
          <p className="text-sm text-muted-foreground">
            Questions? Contact our career guidance team for personalized advice.
          </p>
        </div>
      </div>
    </div>
  );
}