function isUserLoggedIn()
{
    return userId !== null;
}

function promptUserToLogIn()
{
    console.log('Please log in');
}

function login()
{
    userId = 1;
    console.log('Logging in...');
}

function logout()
{
    console.log('Logging out...');
}

function loadCampaigns()
{
    console.log('Loading user data...');
}


if (isUserLoggedIn())
{
    loadCampaigns();
} else {
    promptUserToLogIn();
}