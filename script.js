document.addEventListener('DOMContentLoaded', () => {
    // Redirect to WhatsApp with the prefilled message when "Buy Now" is clicked
    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            window.location.href = `https://api.whatsapp.com/send?phone=+254792766411&text=I'm interested in ${product} from Feneven.`;
        });
    });
});
