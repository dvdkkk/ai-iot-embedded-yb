import React, { useState } from 'react';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 보안 강화된 비밀번호 확인
    if (password === 'siatillno3!') {
      sessionStorage.setItem('admin_auth', 'true');
      onLogin();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-black text-white mb-2">관리자 로그인</h1>
          <p className="text-gray-400 text-sm">콘텐츠 관리를 위해 접속 권한을 확인합니다.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className="w-full bg-black border border-zinc-700 rounded-lg p-4 text-white focus:border-purple-800 outline-none transition-colors text-lg"
              placeholder="접속 비밀번호를 입력하세요"
              autoFocus
            />
            {error && (
              <div className="flex items-center gap-2 text-red-500 text-xs mt-3 animate-pulse">
                <AlertCircle size={14} />
                <span>비밀번호가 올바르지 않습니다.</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-800 hover:bg-purple-700 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-base"
          >
            접속하기
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
          <a href="/" className="text-sm text-gray-500 hover:text-white transition-colors">
            ← 홈페이지로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
};