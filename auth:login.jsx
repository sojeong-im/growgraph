import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const styles = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8fafc',
            fontFamily: '"Outfit", "Noto Sans KR", sans-serif',
            padding: '1rem'
        },
        card: {
            width: '100%',
            maxWidth: '440px',
            backgroundColor: '#ffffff',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            border: '1px solid #f1f5f9'
        },
        header: {
            backgroundColor: '#0f172a',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            position: 'relative',
            color: '#ffffff'
        },
        headerTitle: {
            fontSize: '1.75rem',
            fontWeight: '800',
            marginBottom: '0.5rem',
            letterSpacing: '-0.025em'
        },
        headerSubtitle: {
            color: '#94a3b8',
            fontSize: '0.95rem'
        },
        form: {
            padding: '2.5rem 2rem'
        },
        inputGroup: {
            marginBottom: '1.5rem'
        },
        label: {
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#334155',
            marginBottom: '0.5rem'
        },
        input: {
            width: '100%',
            padding: '0.875rem 1rem',
            borderRadius: '0.75rem',
            border: '1px solid #cbd5e1',
            fontSize: '1rem',
            transition: 'all 0.2s',
            outline: 'none',
            backgroundColor: '#f8fafc',
            boxSizing: 'border-box'
        },
        inputFocus: {
            borderColor: '#2563eb',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)'
        },
        button: {
            width: '100%',
            padding: '1rem',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '1.125rem',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: cursorState => cursorState ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.8 : 1,
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
        },
        errorBox: {
            backgroundColor: '#fef2f2',
            border: '1px solid #fee2e2',
            borderRadius: '0.75rem',
            padding: '1rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem'
        },
        errorText: {
            color: '#dc2626',
            fontSize: '0.875rem',
            fontWeight: '500',
            lineHeight: '1.5'
        },
        footer: {
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.875rem',
            color: '#64748b'
        },
        link: {
            color: '#64748b',
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'color 0.2s'
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (typeof window.loginUser !== 'function') {
                throw new Error('로그인 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.');
            }

            const userCredential = await window.loginUser(email, password);

            // LocalStorage handling matches index.html logic
            localStorage.setItem('growgraph_user', JSON.stringify({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
                loginTime: new Date().toISOString()
            }));

            const redirectUrl = localStorage.getItem('growgraph_redirect_after_login') || '/';
            localStorage.removeItem('growgraph_redirect_after_login');

            alert(`환영합니다, ${userCredential.user.email}님!`);
            window.location.href = redirectUrl;

        } catch (err) {
            console.error(err);
            if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
                setError('이메일 또는 비밀번호가 올바르지 않습니다.');
            } else if (err.code === 'auth/too-many-requests') {
                setError('로그인 시도가 너무 많습니다. 잠시 후 다시 시도해주세요.');
            } else if (err.code === 'auth/invalid-email') {
                setError('유효하지 않은 이메일 형식입니다.');
            } else {
                setError(err.message || '로그인 중 오류가 발생했습니다.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h2 style={styles.headerTitle}>Login</h2>
                    <p style={styles.headerSubtitle}>성장의 궤적을 시각화하세요</p>
                </div>

                <form style={styles.form} onSubmit={handleLogin}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>이메일</label>
                        <input
                            id="email"
                            type="email"
                            required
                            style={styles.input}
                            placeholder="example@growgraph.co.kr"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={(e) => {
                                e.target.style.borderColor = styles.inputFocus.borderColor;
                                e.target.style.backgroundColor = styles.inputFocus.backgroundColor;
                                e.target.style.boxShadow = styles.inputFocus.boxShadow;
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#cbd5e1';
                                e.target.style.backgroundColor = '#f8fafc';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>비밀번호</label>
                        <input
                            id="password"
                            type="password"
                            required
                            style={styles.input}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={(e) => {
                                e.target.style.borderColor = styles.inputFocus.borderColor;
                                e.target.style.backgroundColor = styles.inputFocus.backgroundColor;
                                e.target.style.boxShadow = styles.inputFocus.boxShadow;
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = '#cbd5e1';
                                e.target.style.backgroundColor = '#f8fafc';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                    </div>

                    {error && (
                        <div style={styles.errorBox}>
                            <span style={{ fontSize: '1.25rem' }}>⚠️</span>
                            <p style={styles.errorText}>{error}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{ ...styles.button, opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                        onMouseOver={(e) => !loading && (e.target.style.backgroundColor = '#1e293b')}
                        onMouseOut={(e) => !loading && (e.target.style.backgroundColor = '#0f172a')}
                    >
                        {loading ? '로그인 중...' : '로그인'}
                    </button>

                    <div style={styles.footer}>
                        <a href="#" style={styles.link} onClick={(e) => { e.preventDefault(); alert('비밀번호 찾기 기능은 준비 중입니다.') }}>비밀번호 찾기</a>
                        <a href="#" style={styles.link} onClick={(e) => { e.preventDefault(); alert('회원가입은 준비 중입니다.') }}>회원가입</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
