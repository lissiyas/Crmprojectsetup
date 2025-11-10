import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Send, 
  Inbox, 
  Star, 
  Archive, 
  Trash2, 
  Mail, 
  Users, 
  Zap, 
  Gift, 
  FileText,
  Calendar,
  TrendingUp,
  Eye,
  BarChart3,
  Clock,
  CheckCircle2,
  Plus
} from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface Email {
  id: number;
  from: string;
  subject: string;
  preview: string;
  date: string;
  read: boolean;
  starred: boolean;
  folder: 'inbox' | 'sent' | 'archived';
}

interface Campaign {
  id: number;
  name: string;
  type: 'follow-up' | 'promotional' | 'newsletter' | 'custom';
  status: 'draft' | 'scheduled' | 'sent';
  recipients: number;
  sent: number;
  opens: number;
  clicks: number;
  scheduledDate?: string;
}

interface Template {
  id: number;
  name: string;
  type: 'follow-up' | 'promotional' | 'newsletter' | 'custom';
  subject: string;
  preview: string;
}

export function EmailPage() {
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [isFollowUpOpen, setIsFollowUpOpen] = useState(false);
  const [isPromotionalOpen, setIsPromotionalOpen] = useState(false);
  const [isGroupEmailOpen, setIsGroupEmailOpen] = useState(false);
  const [isTemplateOpen, setIsTemplateOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [activeTab, setActiveTab] = useState('inbox');

  const [emails] = useState<Email[]>([
    {
      id: 1,
      from: 'sarah.j@example.com',
      subject: 'Project Update Required',
      preview: 'Hi, I wanted to follow up on the project timeline...',
      date: '10:30 AM',
      read: false,
      starred: true,
      folder: 'inbox'
    },
    {
      id: 2,
      from: 'michael.c@example.com',
      subject: 'Meeting Tomorrow',
      preview: 'Just confirming our meeting scheduled for tomorrow at 2 PM...',
      date: '9:15 AM',
      read: false,
      starred: false,
      folder: 'inbox'
    },
    {
      id: 3,
      from: 'emily.r@example.com',
      subject: 'Invoice Payment Confirmation',
      preview: 'Thank you for your payment. Your invoice has been processed...',
      date: 'Yesterday',
      read: true,
      starred: false,
      folder: 'inbox'
    },
    {
      id: 4,
      from: 'me@example.com',
      subject: 'Q4 Newsletter',
      preview: 'Welcome to our Q4 newsletter with exciting updates...',
      date: '2 days ago',
      read: true,
      starred: false,
      folder: 'sent'
    }
  ]);

  const [campaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: 'Welcome New Customers',
      type: 'follow-up',
      status: 'sent',
      recipients: 150,
      sent: 150,
      opens: 98,
      clicks: 45
    },
    {
      id: 2,
      name: 'Black Friday Sale',
      type: 'promotional',
      status: 'scheduled',
      recipients: 2500,
      sent: 0,
      opens: 0,
      clicks: 0,
      scheduledDate: 'Nov 29, 2025'
    },
    {
      id: 3,
      name: 'Monthly Newsletter',
      type: 'newsletter',
      status: 'sent',
      recipients: 1200,
      sent: 1200,
      opens: 650,
      clicks: 180
    },
    {
      id: 4,
      name: 'Product Launch Announcement',
      type: 'promotional',
      status: 'draft',
      recipients: 0,
      sent: 0,
      opens: 0,
      clicks: 0
    }
  ]);

  const [templates] = useState<Template[]>([
    {
      id: 1,
      name: 'New Customer Welcome',
      type: 'follow-up',
      subject: 'Welcome to [Company Name]!',
      preview: 'Thank you for joining us. Here\'s what you need to get started...'
    },
    {
      id: 2,
      name: '7-Day Follow-up',
      type: 'follow-up',
      subject: 'How are you enjoying [Product]?',
      preview: 'We wanted to check in and see how things are going...'
    },
    {
      id: 3,
      name: 'Promotional Sale',
      type: 'promotional',
      subject: 'Exclusive Offer: Save 30% Today!',
      preview: 'Don\'t miss out on our biggest sale of the season...'
    },
    {
      id: 4,
      name: 'Monthly Newsletter',
      type: 'newsletter',
      subject: 'Your Monthly Update from [Company]',
      preview: 'Here are this month\'s highlights and updates...'
    }
  ]);

  const inboxEmails = emails.filter(e => e.folder === 'inbox');
  const sentEmails = emails.filter(e => e.folder === 'sent');
  const starredEmails = emails.filter(e => e.starred);

  const EmailList = ({ emails }: { emails: Email[] }) => (
    <ScrollArea className="h-[400px]">
      <div className="space-y-2">
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => setSelectedEmail(email)}
            className={`p-4 rounded-lg border cursor-pointer transition-colors ${
              email.read ? 'bg-white' : 'bg-blue-50 border-blue-200'
            } hover:border-blue-300`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {email.starred && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                  <span className={email.read ? '' : ''}>{email.from}</span>
                </div>
                <div className={`text-sm mt-1 ${!email.read ? '' : ''}`}>{email.subject}</div>
                <div className="text-sm text-gray-500 mt-1 truncate">{email.preview}</div>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap">{email.date}</span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );

  const getCampaignStatusColor = (status: string) => {
    switch (status) {
      case 'sent':
        return 'bg-green-100 text-green-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCampaignTypeIcon = (type: string) => {
    switch (type) {
      case 'follow-up':
        return <Zap className="w-4 h-4" />;
      case 'promotional':
        return <Gift className="w-4 h-4" />;
      case 'newsletter':
        return <Mail className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Email & Campaigns</h2>
        <Dialog open={isComposeOpen} onOpenChange={setIsComposeOpen}>
          <DialogTrigger asChild>
            <Button>
              <Send className="w-4 h-4 mr-2" />
              Compose Email
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>New Message</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <Input id="to" placeholder="recipient@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Email subject" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here..." rows={8} />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsComposeOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="inbox">
            <Inbox className="w-4 h-4 mr-2" />
            Inbox
          </TabsTrigger>
          <TabsTrigger value="campaigns">
            <BarChart3 className="w-4 h-4 mr-2" />
            Campaigns
          </TabsTrigger>
          <TabsTrigger value="templates">
            <FileText className="w-4 h-4 mr-2" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <TrendingUp className="w-4 h-4 mr-2" />
            Analytics
          </TabsTrigger>
        </TabsList>

        {/* INBOX TAB */}
        <TabsContent value="inbox" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-base">Folders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">
                    <Inbox className="w-4 h-4 mr-2" />
                    Inbox
                    <Badge className="ml-auto" variant="secondary">
                      {inboxEmails.filter(e => !e.read).length}
                    </Badge>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Star className="w-4 h-4 mr-2" />
                    Starred
                    <Badge className="ml-auto" variant="secondary">
                      {starredEmails.length}
                    </Badge>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Send className="w-4 h-4 mr-2" />
                    Sent
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Archive className="w-4 h-4 mr-2" />
                    Archived
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Trash
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList>
                    <TabsTrigger value="all">
                      All ({inboxEmails.length})
                    </TabsTrigger>
                    <TabsTrigger value="unread">
                      Unread ({inboxEmails.filter(e => !e.read).length})
                    </TabsTrigger>
                    <TabsTrigger value="starred">
                      Starred ({starredEmails.length})
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4">
                    <EmailList emails={inboxEmails} />
                  </TabsContent>
                  <TabsContent value="unread" className="mt-4">
                    <EmailList emails={inboxEmails.filter(e => !e.read)} />
                  </TabsContent>
                  <TabsContent value="starred" className="mt-4">
                    <EmailList emails={starredEmails} />
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>

          {selectedEmail && (
            <Card>
              <CardHeader>
                <CardTitle>{selectedEmail.subject}</CardTitle>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    From: {selectedEmail.from}
                  </div>
                  <div className="text-sm text-gray-400">{selectedEmail.date}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {selectedEmail.preview}
                </p>
                <p className="mt-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="mt-6 flex gap-2">
                  <Button>Reply</Button>
                  <Button variant="outline">Forward</Button>
                  <Button variant="outline">Archive</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* CAMPAIGNS TAB */}
        <TabsContent value="campaigns" className="space-y-4">
          {/* Campaign Creation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Follow-up Campaign */}
            <Dialog open={isFollowUpOpen} onOpenChange={setIsFollowUpOpen}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed border-blue-200 hover:border-blue-400">
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Zap className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="mb-1">Follow-up Email</h3>
                    <p className="text-sm text-gray-500">
                      Auto-email new customers
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Follow-up Campaign</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaign-name">Campaign Name</Label>
                    <Input id="campaign-name" placeholder="e.g., Welcome New Customers" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trigger">Trigger</Label>
                    <Select>
                      <SelectTrigger id="trigger">
                        <SelectValue placeholder="Select trigger" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="signup">After customer signup</SelectItem>
                        <SelectItem value="purchase">After first purchase</SelectItem>
                        <SelectItem value="days">X days after signup</SelectItem>
                        <SelectItem value="inactive">After period of inactivity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delay">Delay (days)</Label>
                    <Input id="delay" type="number" placeholder="0" defaultValue="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-select">Template</Label>
                    <Select>
                      <SelectTrigger id="template-select">
                        <SelectValue placeholder="Choose a template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="welcome">New Customer Welcome</SelectItem>
                        <SelectItem value="7day">7-Day Follow-up</SelectItem>
                        <SelectItem value="custom">Create Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject-followup">Subject Line</Label>
                    <Input id="subject-followup" placeholder="Welcome to our platform!" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message-followup">Email Content</Label>
                    <Textarea 
                      id="message-followup" 
                      placeholder="Hi {{name}}, welcome to our platform! We're excited to have you..." 
                      rows={6} 
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsFollowUpOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Create Campaign
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            {/* Promotional Campaign */}
            <Dialog open={isPromotionalOpen} onOpenChange={setIsPromotionalOpen}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed border-purple-200 hover:border-purple-400">
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Gift className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="mb-1">Promotional Email</h3>
                    <p className="text-sm text-gray-500">
                      Sales & special offers
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Promotional Campaign</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="promo-name">Campaign Name</Label>
                    <Input id="promo-name" placeholder="e.g., Black Friday Sale" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="audience">Target Audience</Label>
                    <Select>
                      <SelectTrigger id="audience">
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All customers</SelectItem>
                        <SelectItem value="active">Active customers</SelectItem>
                        <SelectItem value="inactive">Inactive customers</SelectItem>
                        <SelectItem value="vip">VIP customers</SelectItem>
                        <SelectItem value="new">New customers (last 30 days)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="send-date">Send Date</Label>
                      <Input id="send-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="send-time">Send Time</Label>
                      <Input id="send-time" type="time" defaultValue="09:00" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="promo-subject">Subject Line</Label>
                    <Input id="promo-subject" placeholder="🎉 Exclusive Offer: Save 30% Today!" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="promo-message">Email Content</Label>
                    <Textarea 
                      id="promo-message" 
                      placeholder="Don't miss out on our biggest sale of the season..." 
                      rows={6} 
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsPromotionalOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="outline">
                      Save as Draft
                    </Button>
                    <Button type="submit">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            {/* Group/Newsletter Campaign */}
            <Dialog open={isGroupEmailOpen} onOpenChange={setIsGroupEmailOpen}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed border-green-200 hover:border-green-400">
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="mb-1">Group Email</h3>
                    <p className="text-sm text-gray-500">
                      Newsletter & updates
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Group Email / Newsletter</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-name">Newsletter Name</Label>
                    <Input id="newsletter-name" placeholder="e.g., Monthly Newsletter" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="recipients">Recipients</Label>
                    <Select>
                      <SelectTrigger id="recipients">
                        <SelectValue placeholder="Select recipients" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All subscribers (2,500)</SelectItem>
                        <SelectItem value="segment1">Active users (1,200)</SelectItem>
                        <SelectItem value="segment2">Premium customers (450)</SelectItem>
                        <SelectItem value="segment3">Trial users (350)</SelectItem>
                        <SelectItem value="custom">Custom segment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <Select>
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">Send once</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="custom">Custom schedule</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-subject">Subject Line</Label>
                    <Input id="newsletter-subject" placeholder="Your Monthly Update" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newsletter-message">Newsletter Content</Label>
                    <Textarea 
                      id="newsletter-message" 
                      placeholder="Here are this month's highlights and updates..." 
                      rows={8} 
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsGroupEmailOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="outline">
                      Save Draft
                    </Button>
                    <Button type="submit">
                      <Send className="w-4 h-4 mr-2" />
                      Send Now
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            {/* Custom Campaign */}
            <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed border-orange-200 hover:border-orange-400">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <FileText className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <h3 className="mb-1">Custom Campaign</h3>
                <p className="text-sm text-gray-500">
                  Build from scratch
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Active Campaigns */}
          <Card>
            <CardHeader>
              <CardTitle>Active Campaigns</CardTitle>
              <CardDescription>Manage your email campaigns and track performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {campaigns.map((campaign) => (
                  <div
                    key={campaign.id}
                    className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="p-2 bg-gray-100 rounded">
                          {getCampaignTypeIcon(campaign.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4>{campaign.name}</h4>
                            <Badge className={getCampaignStatusColor(campaign.status)} variant="secondary">
                              {campaign.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                            <div>
                              <div className="text-gray-500">Recipients</div>
                              <div>{campaign.recipients.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Sent</div>
                              <div>{campaign.sent.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Opens</div>
                              <div>{campaign.opens > 0 ? `${campaign.opens} (${Math.round((campaign.opens / campaign.sent) * 100)}%)` : '-'}</div>
                            </div>
                            <div>
                              <div className="text-gray-500">Clicks</div>
                              <div>{campaign.clicks > 0 ? `${campaign.clicks} (${Math.round((campaign.clicks / campaign.sent) * 100)}%)` : '-'}</div>
                            </div>
                          </div>
                          {campaign.scheduledDate && (
                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4" />
                              Scheduled for {campaign.scheduledDate}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TEMPLATES TAB */}
        <TabsContent value="templates" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg">Email Templates</h3>
              <p className="text-sm text-gray-500">Pre-designed templates for your campaigns</p>
            </div>
            <Dialog open={isTemplateOpen} onOpenChange={setIsTemplateOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Template
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create Email Template</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="template-name">Template Name</Label>
                    <Input id="template-name" placeholder="e.g., Welcome Email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-type">Template Type</Label>
                    <Select>
                      <SelectTrigger id="template-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="follow-up">Follow-up</SelectItem>
                        <SelectItem value="promotional">Promotional</SelectItem>
                        <SelectItem value="newsletter">Newsletter</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-subject">Subject Line</Label>
                    <Input id="template-subject" placeholder="Email subject" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-content">Template Content</Label>
                    <Textarea 
                      id="template-content" 
                      placeholder="Use {{name}}, {{company}}, etc. for personalization..." 
                      rows={8} 
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={() => setIsTemplateOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      Save Template
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templates.map((template) => (
              <Card key={template.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gray-100 rounded">
                        {getCampaignTypeIcon(template.type)}
                      </div>
                      <div>
                        <CardTitle className="text-base">{template.name}</CardTitle>
                        <Badge className="mt-1" variant="secondary">
                          {template.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Subject:</div>
                      <div className="text-sm">{template.subject}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Preview:</div>
                      <div className="text-sm text-gray-600 line-clamp-2">{template.preview}</div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1">
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ANALYTICS TAB */}
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-gray-600">Total Sent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">2,550</div>
                <p className="text-xs text-green-600 mt-1">+12% this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-gray-600">Open Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">54.3%</div>
                <p className="text-xs text-green-600 mt-1">+3.2% vs last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-gray-600">Click Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">14.8%</div>
                <p className="text-xs text-green-600 mt-1">+1.5% vs last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-gray-600">Conversions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl">225</div>
                <p className="text-xs text-green-600 mt-1">+8% this month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Detailed analytics for all campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.filter(c => c.status === 'sent').map((campaign) => (
                  <div key={campaign.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4>{campaign.name}</h4>
                      <Badge variant="secondary">{campaign.type}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Sent</div>
                        <div className="text-lg">{campaign.sent.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Delivered</div>
                        <div className="text-lg">{Math.round(campaign.sent * 0.98).toLocaleString()}</div>
                        <div className="text-xs text-gray-500">98%</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Opens</div>
                        <div className="text-lg">{campaign.opens}</div>
                        <div className="text-xs text-gray-500">{Math.round((campaign.opens / campaign.sent) * 100)}%</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-1">Clicks</div>
                        <div className="text-lg">{campaign.clicks}</div>
                        <div className="text-xs text-gray-500">{Math.round((campaign.clicks / campaign.sent) * 100)}%</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs mb-1">CTR</div>
                        <div className="text-lg">{campaign.opens > 0 ? Math.round((campaign.clicks / campaign.opens) * 100) : 0}%</div>
                        <div className="text-xs text-gray-500">Click-through</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
