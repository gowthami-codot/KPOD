"use client";

import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth/AuthContext';

const useProtectedRoute = () => {
 const router = useRouter();
 const { currentUser } = useAuth();

 if (!currentUser) {
    router.push('/signIn');
 }
};

export default useProtectedRoute;
