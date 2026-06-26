-- Create supporters table
CREATE TABLE public.supporters (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    whatsapp TEXT NOT NULL,
    state TEXT NOT NULL,
    lga TEXT NOT NULL,
    occupation TEXT NOT NULL,
    interest TEXT NOT NULL CHECK (interest IN ('Supporter', 'Volunteer', 'Media', 'Donor')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create messages table
CREATE TABLE public.messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS) but allow anonymous inserts for public forms
ALTER TABLE public.supporters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert to supporters" ON public.supporters FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert to messages" ON public.messages FOR INSERT WITH CHECK (true);