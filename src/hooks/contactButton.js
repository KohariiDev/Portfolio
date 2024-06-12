export default ContactButton = () => {
    const subject = encodeURIComponent('Contact Us');
    const body = encodeURIComponent('Please enter your message here');
    window.location.href = `mailto:kohari.dev@gmail.com?subject=${subject}&body=${body}`

    return null;
};