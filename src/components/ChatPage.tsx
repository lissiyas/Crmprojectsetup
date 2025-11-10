import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Send, Search, MoreVertical } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

interface Message {
  id: number;
  senderId: number;
  text: string;
  time: string;
  isOwn: boolean;
}

export function ChatPage() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const contacts: Contact[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      lastMessage: 'Thanks for the update!',
      time: '10:30 AM',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      lastMessage: 'See you tomorrow',
      time: '9:15 AM',
      unread: 0,
      online: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      lastMessage: 'Payment confirmed',
      time: 'Yesterday',
      unread: 1,
      online: false
    },
    {
      id: 4,
      name: 'James Wilson',
      lastMessage: 'Great work on the proposal',
      time: 'Yesterday',
      unread: 0,
      online: false
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      lastMessage: 'Can we schedule a call?',
      time: '2 days ago',
      unread: 0,
      online: true
    }
  ];

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      senderId: 1,
      text: 'Hi! How are you doing?',
      time: '10:25 AM',
      isOwn: false
    },
    {
      id: 2,
      senderId: 0,
      text: 'Hey! I\'m doing great, thanks for asking!',
      time: '10:26 AM',
      isOwn: true
    },
    {
      id: 3,
      senderId: 1,
      text: 'I wanted to follow up on our project discussion',
      time: '10:27 AM',
      isOwn: false
    },
    {
      id: 4,
      senderId: 0,
      text: 'Of course! I have some updates ready',
      time: '10:28 AM',
      isOwn: true
    },
    {
      id: 5,
      senderId: 1,
      text: 'Thanks for the update!',
      time: '10:30 AM',
      isOwn: false
    }
  ]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      senderId: 0,
      text: messageInput,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl">Chat</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-200px)]">
        {/* Contacts List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base">Messages</CardTitle>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search contacts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-350px)]">
              <div className="space-y-1 p-4 pt-0">
                {filteredContacts.map((contact) => (
                  <button
                    key={contact.id}
                    onClick={() => setSelectedContact(contact)}
                    className={`w-full p-3 rounded-lg text-left transition-colors ${
                      selectedContact?.id === contact.id
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarFallback className="bg-blue-600 text-white">
                            {contact.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {contact.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm truncate">{contact.name}</span>
                          <span className="text-xs text-gray-400">{contact.time}</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                          {contact.unread > 0 && (
                            <Badge className="bg-blue-600 text-white ml-2">{contact.unread}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 flex flex-col">
          {selectedContact ? (
            <>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback className="bg-blue-600 text-white">
                          {selectedContact.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {selectedContact.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <div>{selectedContact.name}</div>
                      <div className="text-xs text-gray-500">
                        {selectedContact.online ? 'Online' : 'Offline'}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </CardHeader>

              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.isOwn
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <CardContent className="border-t p-4">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="text-4xl mb-2">💬</div>
                <p>Select a contact to start chatting</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
