'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Instagram, Twitter, Menu } from 'lucide-react';

const DJLandingPage = () => {
    const [showContent, setShowContent] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(true);
            setTimeout(() => setShowContent(true), 300);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // First frame - only photo
    if (!showContent) {
        return (
            <div className="min-h-screen bg-[#fbfbfd] dark:bg-black p-4 flex items-center justify-center">
                <div className={`relative w-full max-w-[280px] sm:max-w-sm md:max-w-lg transition-all duration-1000 ease-in-out ${
                    isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                        <Image
                            src="/dikson.png"
                            alt="DJ Portrait"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 400px) 50vw, (max-width: 600px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </div>
        );
    }

    // Second frame - full content
    return (
        <div className="min-h-screen bg-[#fbfbfd] dark:bg-black p-4">
            <div className={`max-w-6xl mx-auto transition-all duration-1000 ease-in-out ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-8">
                        <h2 className="text-4xl font-medium text-neutral-900 dark:text-neutral-100 leading-tight">
                            Дияр ДиярДиярДияр<em className="font-serif not-italic text-neutral-600 dark:text-neutral-400">Дияр</em>Дияр
                        </h2>
                    </div>

                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                        <Image
                            src="/dikson.png"
                            alt="DJ Portrait"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className="bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-8">
                        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            ДиярДиярДиярДиярДиярДияр
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8">
                        <div className="flex flex-col justify-between h-full">
                            <h3 className="text-2xl font-medium text-white mb-4">Связаться со мной</h3>
                            <Button
                                className="w-full justify-between bg-white/10 hover:bg-white/20 text-white border-0"
                                variant="outline"
                            >
                                Связаться со мной
                                <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-8">
                        <div className="space-y-6">
                            {['Дияр', 'Дияр', 'Дияр', 'Дияр'].map((item) => (
                                <div
                                    key={item}
                                    className="group flex items-center justify-between cursor-pointer hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 p-3 rounded-xl transition-all"
                                >
                                    <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">{item}</h3>
                                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-600 dark:text-neutral-400" />
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-8">
                            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50">
                                <Instagram className="h-5 w-5 text-neutral-900 dark:text-neutral-100" />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50">
                                <Twitter className="h-5 w-5 text-neutral-900 dark:text-neutral-100" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DJLandingPage;