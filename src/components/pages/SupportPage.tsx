
import { ArrowLeft, Github, MessageSquare, Book, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useApp } from '../../context/AppContext';

interface SupportPageProps {
  onBack: () => void;
}

export function SupportPage({ onBack }: SupportPageProps) {
  const { selectedProduct } = useApp();

  const supportOptions = [
    {
      title: "GitHub Issues",
      description: "Report bugs, request features, or ask technical questions",
      icon: <Github className="w-6 h-6" />,
      action: () => window.open(selectedProduct?.support || 'https://github.com/bigmangotree', '_blank')
    },
    {
      title: "Documentation",
      description: "Browse our comprehensive guides and API documentation",
      icon: <Book className="w-6 h-6" />,
      action: () => window.open(selectedProduct?.repo ? `${selectedProduct.repo}#readme` : '#', '_blank')
    },
    {
      title: "Community Discussions",
      description: "Join discussions with other users and contributors",
      icon: <MessageSquare className="w-6 h-6" />,
      action: () => window.open('https://github.com/orgs/bigmangotree/discussions', '_blank')
    },
    {
      title: "Contact Us",
      description: "Get in touch with our team directly",
      icon: <Mail className="w-6 h-6" />,
      action: () => window.open('mailto:hello@bigmangotree.dev', '_blank')
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-xl text-muted-foreground">
              {selectedProduct 
                ? `Get help with ${selectedProduct.name}` 
                : 'We\'re here to help you with our products'
              }
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {option.icon}
                  </div>
                  {option.title}
                </CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={option.action} variant="outline" className="w-full">
                  Get Help
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle>Can't find what you're looking for?</CardTitle>
            <CardDescription>
              Our community is always ready to help. Join our GitHub discussions or reach out directly.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex gap-3 justify-center">
              <Button onClick={() => window.open('https://github.com/orgs/bigmangotree/discussions', '_blank')}>
                Join Community
              </Button>
              <Button variant="outline" onClick={() => window.open('mailto:hello@bigmangotree.dev', '_blank')}>
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}