-- applications 테이블
CREATE TABLE IF NOT EXISTS applications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  age integer,
  gender text,
  phone text,
  location text,
  program text,
  schedule text,
  referral_code text,
  final_price integer,
  status text DEFAULT '검토중',
  created_at timestamptz DEFAULT now()
);

-- inquiries 테이블
CREATE TABLE IF NOT EXISTS inquiries (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  company text,
  name text,
  type text,
  contact_name text,
  phone text,
  email text,
  message text,
  status text DEFAULT '신규',
  created_at timestamptz DEFAULT now()
);

-- diagnostic_results 테이블
CREATE TABLE IF NOT EXISTS diagnostic_results (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  type text,
  score integer,
  level text,
  answers jsonb,
  created_at timestamptz DEFAULT now()
);

-- RLS 활성화
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE diagnostic_results ENABLE ROW LEVEL SECURITY;

-- 누구나 INSERT 가능
CREATE POLICY "Anyone can insert applications" ON applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert inquiries" ON inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert diagnostic_results" ON diagnostic_results FOR INSERT WITH CHECK (true);

-- 인증된 사용자만 SELECT
CREATE POLICY "Authenticated can read applications" ON applications FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can read inquiries" ON inquiries FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated can read diagnostic_results" ON diagnostic_results FOR SELECT USING (auth.role() = 'authenticated');
