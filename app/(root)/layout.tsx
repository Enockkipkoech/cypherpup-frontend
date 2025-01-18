import React from 'react';
import Navbar from '@/components/navbar';
import { WalletConnect } from '@/components/walletConnect';

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="font-work-sans">
			<Navbar />
			<WalletConnect />

			{children}
		</main>
	);
}
