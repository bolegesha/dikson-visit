'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Instagram, Twitter, Menu } from 'lucide-react';

const DJLandingPage = () => {
    const [showContent, setShowContent] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

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
            <div className="h-[100dvh] w-screen bg-[#fbfbfd] dark:bg-black flex items-center justify-center">
                <div className={`w-36 sm:w-40 transition-all duration-1000 ease-in-out ${
                    isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                    <div className="aspect-[3/4] rounded-lg overflow-hidden">
                        <Image
                            src="/dikson.png"
                            alt="DJ Portrait"
                            width={160}
                            height={213}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        );
    }

    // Second frame - full content
    return (
        <div className="min-h-[100dvh] w-screen bg-[#fbfbfd] dark:bg-black">
            <div className={`w-full transition-all duration-1000 ease-in-out ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
                <div className="w-full max-w-md mx-auto px-3 py-4 sm:max-w-2xl md:max-w-4xl">
                    <div className="flex flex-col gap-3">
                        {/* Header Section */}
                        <div className="w-full bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-lg p-4">
                            <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                                Дияр <span className="font-serif text-neutral-600 dark:text-neutral-400">Дияр</span>
                            </h2>
                        </div>

                        {/* Grid for main content */}
                        <div className="grid grid-cols-2 gap-3">
                            {/* Portrait Image */}
                            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                                <Image
                                    src="/dikson.png"
                                    alt="DJ Portrait"
                                    width={300}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            {/* Description */}
                            <div className="bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-lg p-4">
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    ДиярДиярДияр
                                </p>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg p-4">
                            <div className="flex flex-col gap-3">
                                <h3 className="text-sm font-medium text-white">Связаться со мной</h3>
                                <Button
                                    className="w-full justify-between bg-white/10 hover:bg-white/20 text-white border-0 text-sm h-9"
                                    variant="outline"
                                >
                                    <span>Связаться</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="bg-gradient-to-br from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-lg p-4">
                            <div className="flex flex-col gap-2">
                                {['Дияр', 'Дияр', 'Дияр', 'Дияр'].map((item, index) => (
                                    <div
                                        key={index}
                                        className="group flex items-center justify-between hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 p-2 rounded-md"
                                    >
                                        <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{item}</span>
                                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-neutral-600 dark:text-neutral-400" />
                                    </div>
                                ))}
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex gap-2 mt-3">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 rounded-md hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50"
                                >
                                    <Instagram className="h-4 w-4 text-neutral-900 dark:text-neutral-100" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 rounded-md hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50"
                                >
                                    <Twitter className="h-4 w-4 text-neutral-900 dark:text-neutral-100" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DJLandingPage;