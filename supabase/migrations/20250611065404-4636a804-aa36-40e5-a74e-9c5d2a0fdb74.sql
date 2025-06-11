
-- Create a contacts table to store form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert contact forms (public submissions)
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contacts 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy that allows only authenticated users to view contacts (for admin access)
CREATE POLICY "Authenticated users can view contacts" 
  ON public.contacts 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
