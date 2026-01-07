import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BaseCrudService } from '@/integrations';
import { WholesaleInquiries } from '@/entities';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    inquirerName: '',
    inquirerEmail: '',
    inquirerPhone: '',
    inquiryType: '',
    companyName: '',
    messageContent: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const inquiry: WholesaleInquiries = {
        _id: crypto.randomUUID(),
        inquirerName: formData.inquirerName,
        inquirerEmail: formData.inquirerEmail,
        inquirerPhone: formData.inquirerPhone,
        inquiryType: formData.inquiryType,
        companyName: formData.companyName,
        messageContent: formData.messageContent,
      };

      await BaseCrudService.create('wholesaleinquiries', inquiry);

      toast({
        title: 'Message Sent!',
        description: 'Thank you for your inquiry. We\'ll get back to you soon!',
      });

      // Reset form
      setFormData({
        inquirerName: '',
        inquirerEmail: '',
        inquirerPhone: '',
        inquiryType: '',
        companyName: '',
        messageContent: '',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+92 03008404234',
      description: 'Mon-Sat, 9am-8pm',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'chtrader017@gmail.com',
      description: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Lahore, Pakistan',
      description: 'Serving nationwide',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-secondary/30 to-background py-20">
        <div className="max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-primary mb-6">
              Get in Touch
            </h1>
            <p className="font-paragraph text-lg text-foreground leading-relaxed">
              Whether you're interested in wholesale orders, have questions about our products, or just want to say hello, we'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="bg-white rounded-3xl p-8 shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-paragraph text-xl font-semibold text-secondary-foreground mb-2">
                {info.title}
              </h3>
              <p className="font-paragraph text-lg text-primary mb-1">
                {info.content}
              </p>
              <p className="font-paragraph text-sm text-foreground">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-primary mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="inquirerName" className="font-paragraph text-base text-secondary-foreground mb-2 block">
                  Your Name *
                </Label>
                <Input
                  id="inquirerName"
                  name="inquirerName"
                  type="text"
                  required
                  value={formData.inquirerName}
                  onChange={handleInputChange}
                  className="rounded-2xl border-secondary/40 focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <Label htmlFor="inquirerEmail" className="font-paragraph text-base text-secondary-foreground mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="inquirerEmail"
                  name="inquirerEmail"
                  type="email"
                  required
                  value={formData.inquirerEmail}
                  onChange={handleInputChange}
                  className="rounded-2xl border-secondary/40 focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="inquirerPhone" className="font-paragraph text-base text-secondary-foreground mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="inquirerPhone"
                  name="inquirerPhone"
                  type="tel"
                  value={formData.inquirerPhone}
                  onChange={handleInputChange}
                  className="rounded-2xl border-secondary/40 focus:border-primary"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div>
                <Label htmlFor="inquiryType" className="font-paragraph text-base text-secondary-foreground mb-2 block">
                  Inquiry Type *
                </Label>
                <Select value={formData.inquiryType} onValueChange={handleSelectChange} required>
                  <SelectTrigger className="rounded-2xl border-secondary/40 focus:border-primary">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wholesale">Wholesale Order</SelectItem>
                    <SelectItem value="bulk">Bulk Purchase</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="companyName" className="font-paragraph text-base text-secondary-foreground mb-2 block">
                  Company Name (Optional)
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="rounded-2xl border-secondary/40 focus:border-primary"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <Label htmlFor="messageContent" className="font-paragraph text-base text-secondary-foreground mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="messageContent"
                  name="messageContent"
                  required
                  value={formData.messageContent}
                  onChange={handleInputChange}
                  className="rounded-2xl border-secondary/40 focus:border-primary min-h-[150px]"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-paragraph text-lg py-6 rounded-3xl"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl text-primary mb-4">
                Wholesale Inquiries Welcome!
              </h2>
              <p className="font-paragraph text-lg text-foreground leading-relaxed mb-6">
                Looking to stock Khoya Bliss at your restaurant, café, or event? We offer special wholesale pricing and flexible delivery options for bulk orders.
              </p>
              <p className="font-paragraph text-lg text-foreground leading-relaxed">
                Our team is ready to work with you to create custom solutions that meet your needs. Whether you need regular deliveries or a one-time large order, we've got you covered.
              </p>
            </div>

            <div className="bg-secondary/20 rounded-3xl p-8">
              <h3 className="font-paragraph text-xl font-semibold text-secondary-foreground mb-4">
                Why Partner With Us?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="font-paragraph text-base text-foreground">
                    Competitive wholesale pricing
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="font-paragraph text-base text-foreground">
                    Flexible delivery schedules
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="font-paragraph text-base text-foreground">
                    Consistent quality guarantee
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="font-paragraph text-base text-foreground">
                    Dedicated support team
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary to-saffron rounded-3xl p-8 text-white">
              <h3 className="font-heading text-2xl mb-3">
                Quick Response Time
              </h3>
              <p className="font-paragraph text-base leading-relaxed">
                We typically respond to all inquiries within 24 hours. For urgent matters, feel free to call us directly during business hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
