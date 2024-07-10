import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
    'https://ymtpugxyrrzqgykansdf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltdHB1Z3h5cnJ6cWd5a2Fuc2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1Mzc1NDYsImV4cCI6MjAzNDExMzU0Nn0.BBYT3K5hGn_JeHrEPDnyot0NZZkoYldZ9jFwO4ulj38'
);

export class UserService {
    async getUserDetail() {
        try {
        const { data, error } = await supabase.from('User').select();
        console.log(data);
        console.log(error);
        } catch (error) {
            console.log(error);
        }
    }

    getProducts() {
        return fetch('/demo/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProductsMixed() {
        return fetch('/demo/data/products-mixed.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('/demo/data/products-orders-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProductsWithOrdersLarge() {
        return fetch('/demo/data/products-orders.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data);
    }
}
