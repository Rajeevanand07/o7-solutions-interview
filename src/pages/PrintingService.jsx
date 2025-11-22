import { useForm } from 'react-hook-form';
import { useState } from 'react';

const PrintingService = () => {
    const [total, setTotal] = useState(0);
    const [pageBlackOrWhite, setPageBlackOrWhite] = useState(0);
    const [delivery, setDelivery] = useState(false);
    
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            item: '',
            quantity: ''
        }
    });

    const onSubmit = (data) => {
        const { item, quantity } = data;
        const quantityNum = Number(quantity);
        
        if (!item || quantityNum <= 0) return;
        
        let itemPrice = 0;
        if(item === 'blackOrWhite') itemPrice = 10;
        else if(item === 'color') itemPrice = 20;
        
        let subtotal = itemPrice * quantityNum;
        let itemDiscount = 0;
        
        if (quantityNum > 20) {
            itemDiscount = subtotal * 0.1; 
            subtotal = subtotal - itemDiscount;
        }

        if (delivery) {
            subtotal = subtotal + 50;
        }
        
        setTotal(prevTotal => prevTotal + subtotal);
        setPageBlackOrWhite(prevDiscount => prevDiscount + itemDiscount);
        reset();
    };

    return (
        <div className="flex h-screen items-center gap-10 flex-col pt-10">
            <h1 className='text-5xl'>Printing Service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <select 
                    {...register("item", { required: true })}
                    className="border-b-[1px] focus:focus:outline-none"
                >
                    <option value="">Select Page</option>
                    <option value="blackOrWhite">Black or White - ₹10</option>
                    <option value="color">Color - ₹20</option>
                </select>
                <input 
                    type="number" 
                    {...register("quantity", { required: true, min: 1 })}
                    placeholder="Quantity" 
                    className="border-b-[1px] focus:focus:outline-none" 
                />
                <label className="flex gap-2">
                    <input 
                        type="checkbox" 
                        {...register("delivery", { required: true })}
                        onChange={(e) => setDelivery(e.target.value)}
                    />
                    delivery
                </label>
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-gray-500 text-white rounded-2xl"
                >
                    Add Item
                </button>
            </form>
            <div className="flex gap-4 justify-between items-center">
                <h1>Current Total</h1>
                <p className="text-2xl">₹{total}</p>
            </div>
            {pageBlackOrWhite !== 0 && (
                <div className="flex gap-4 justify-between items-center">
                    <h1>Discount</h1>
                    <p className="text-2xl">-₹{pageBlackOrWhite}</p>
                </div>
            )}
            {delivery && (
                <div className="flex gap-4 justify-between items-center">
                    <h1>Delivery</h1>
                    <p className="text-2xl">{delivery == 'on' ? '₹50' : '₹0'}</p>
                </div>
            )}
        </div>
    );
};

export default PrintingService;