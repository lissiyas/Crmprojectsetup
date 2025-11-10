import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Plus, Download, Eye, CreditCard, DollarSign } from 'lucide-react';

interface Invoice {
  id: number;
  invoiceNumber: string;
  customer: string;
  amount: string;
  status: 'paid' | 'pending' | 'overdue';
  date: string;
  dueDate: string;
}

interface Subscription {
  id: number;
  plan: string;
  customer: string;
  price: string;
  status: 'active' | 'cancelled' | 'paused';
  nextBilling: string;
}

export function BillingPage() {
  const [isInvoiceDialogOpen, setIsInvoiceDialogOpen] = useState(false);

  const invoices: Invoice[] = [
    {
      id: 1,
      invoiceNumber: 'INV-001',
      customer: 'Tech Corp',
      amount: '$2,500.00',
      status: 'paid',
      date: 'Oct 20, 2025',
      dueDate: 'Oct 20, 2025'
    },
    {
      id: 2,
      invoiceNumber: 'INV-002',
      customer: 'Design Studio',
      amount: '$1,200.00',
      status: 'pending',
      date: 'Oct 22, 2025',
      dueDate: 'Nov 22, 2025'
    },
    {
      id: 3,
      invoiceNumber: 'INV-003',
      customer: 'Marketing Plus',
      amount: '$850.00',
      status: 'overdue',
      date: 'Oct 15, 2025',
      dueDate: 'Oct 25, 2025'
    },
    {
      id: 4,
      invoiceNumber: 'INV-004',
      customer: 'Consulting LLC',
      amount: '$3,200.00',
      status: 'paid',
      date: 'Oct 18, 2025',
      dueDate: 'Oct 18, 2025'
    }
  ];

  const subscriptions: Subscription[] = [
    {
      id: 1,
      plan: 'Professional Plan',
      customer: 'Tech Corp',
      price: '$99/month',
      status: 'active',
      nextBilling: 'Nov 15, 2025'
    },
    {
      id: 2,
      plan: 'Basic Plan',
      customer: 'Design Studio',
      price: '$49/month',
      status: 'active',
      nextBilling: 'Nov 10, 2025'
    },
    {
      id: 3,
      plan: 'Enterprise Plan',
      customer: 'Consulting LLC',
      price: '$299/month',
      status: 'active',
      nextBilling: 'Nov 20, 2025'
    },
    {
      id: 4,
      plan: 'Professional Plan',
      customer: 'Retail Group',
      price: '$99/month',
      status: 'cancelled',
      nextBilling: '-'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const totalRevenue = '$7,750.00';
  const pendingAmount = '$2,050.00';
  const activeSubscriptions = subscriptions.filter(s => s.status === 'active').length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Billing & Payments</h2>
        <Dialog open={isInvoiceDialogOpen} onOpenChange={setIsInvoiceDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Invoice
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Invoice</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="customer">Customer</Label>
                <Input id="customer" placeholder="Select customer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Invoice description" rows={3} />
              </div>
              <Button type="submit" className="w-full">
                Create Invoice
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">
              Total Revenue
            </CardTitle>
            <div className="bg-green-500 p-2 rounded-lg">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{totalRevenue}</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">
              Pending
            </CardTitle>
            <div className="bg-yellow-500 p-2 rounded-lg">
              <CreditCard className="w-4 h-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{pendingAmount}</div>
            <p className="text-xs text-gray-500 mt-1">Awaiting payment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm text-gray-600">
              Active Subscriptions
            </CardTitle>
            <div className="bg-blue-500 p-2 rounded-lg">
              <CreditCard className="w-4 h-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{activeSubscriptions}</div>
            <p className="text-xs text-gray-500 mt-1">Monthly recurring</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Invoices and Subscriptions */}
      <Card>
        <CardHeader>
          <Tabs defaultValue="invoices" className="w-full">
            <TabsList>
              <TabsTrigger value="invoices">Invoices</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            </TabsList>

            <TabsContent value="invoices" className="mt-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell>{invoice.invoiceNumber}</TableCell>
                        <TableCell>{invoice.customer}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.dueDate}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(invoice.status)} variant="secondary">
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="subscriptions" className="mt-4">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plan</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Next Billing</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscriptions.map((subscription) => (
                      <TableRow key={subscription.id}>
                        <TableCell>{subscription.plan}</TableCell>
                        <TableCell>{subscription.customer}</TableCell>
                        <TableCell>{subscription.price}</TableCell>
                        <TableCell>{subscription.nextBilling}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(subscription.status)} variant="secondary">
                            {subscription.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Manage
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>
    </div>
  );
}
