import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

/**
 * The main page component that redirects based on authentication status.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
const Page = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    
    if (token) {
        redirect('/dashboard');
    } else {
        redirect('/login');
    }
};

export default Page;
