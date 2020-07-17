let domain = '';
if (process.env.NODE_ENV === 'development') {
    domain = 'http://localhost:7016/'
} else {
    domain = 'http://webs.yr.dev.q1.com/'
}

export default domain


