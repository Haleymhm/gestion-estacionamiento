const BASE_URL = 'http://localhost:5000/api/v1';

async function verifyAuth() {
    const email = `testuser_${Date.now()}@example.com`;
    const password = 'password123';
    const name = 'Test User';

    console.log(`Starting Verification on ${BASE_URL}...`);

    // 1. Register
    console.log('\n1. Testing Registration...');
    const regRes = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
    });

    if (regRes.status === 201) {
        console.log('✅ Registration Successful');
        const user = await regRes.json();
        console.log('User:', user);
    } else {
        console.error('❌ Registration Failed', regRes.status, await regRes.text());
        return;
    }

    // 2. Login
    console.log('\n2. Testing Login...');
    const loginRes = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    let token = '';
    if (loginRes.status === 200) {
        console.log('✅ Login Successful');
        const data = await loginRes.json();
        token = data.token;
        console.log('Token received');
    } else {
        console.error('❌ Login Failed', loginRes.status, await loginRes.text());
        return;
    }

    // 3. Protected Route (Success)
    console.log('\n3. Testing Protected Route (With Token)...');
    const meRes = await fetch(`${BASE_URL}/auth/me`, {
        headers: { 'Authorization': `Bearer ${token}` },
    });

    if (meRes.status === 200) {
        console.log('✅ Access Granted');
        console.log(await meRes.json());
    } else {
        console.error('❌ Access Denied (Unexpected)', meRes.status, await meRes.text());
    }

    // 4. Protected Route (Failure)
    console.log('\n4. Testing Protected Route (Without Token)...');
    const failRes = await fetch(`${BASE_URL}/auth/me`);

    if (failRes.status === 401) {
        console.log('✅ Access Correctly Denied');
    } else {
        console.error('❌ Access Granted (Unexpected)', failRes.status);
    }
}

verifyAuth().catch(console.error);
