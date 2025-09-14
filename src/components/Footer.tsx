import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Vidya University Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold text-foreground">Vidya University</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-sm">
              Pioneering the future of technology and innovation through world-class education and groundbreaking research.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Academics</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Admissions</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Faculty Directory</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Campus Map</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">News & Events</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1" />
                <span className="text-sm text-muted-foreground">123 Innovation Drive, Tech City, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@vidya.edu" className="text-sm text-muted-foreground hover:text-primary">info@vidya.edu</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">(123) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vidya University. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
