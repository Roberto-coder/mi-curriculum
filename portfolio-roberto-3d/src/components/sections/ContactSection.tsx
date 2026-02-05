'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

const formSchema = z.object({
    name: z.string().min(2, { message: 'Nombre muy corto' }),
    email: z.string().email({ message: 'Email inválido' }),
    message: z.string().min(10, { message: 'El mensaje debe ser más largo' }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        // Here you would call your API route
        console.log(data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Mensaje enviado (simulado)");
    };

    return (
        <div className="w-full max-w-md mx-auto bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 pointer-events-auto">
            <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Conectar
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                    <input
                        {...register('name')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                        {...register('email')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Mensaje</label>
                    <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg disabled:opacity-50"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar Transmisión'}
                </motion.button>
            </form>
        </div>
    );
}
