"use client"
import React from 'react';
import { auth } from '@/auth';
import { useState } from 'react';
import { ethers } from 'ethers';

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ethereum: any;
	}
}

const WalletConnect = () => {
	const session = auth();
	console.log({ session });

	const [walletAddress, setWalletAddress] = useState<string | null>(null);

	const connectWallet = async () => {
		if (typeof window.ethereum !== 'undefined') {
			const provider = new ethers.BrowserProvider(window.ethereum);
			const accounts = await provider.send('eth_requestAccounts', []);
			setWalletAddress(accounts[0]);
		} else {
			alert('MetaMask is not installed');
		}
	};
	return (
		<div>
			{walletAddress ? (
				<p>Connected Wallet: {walletAddress}</p>
			) : (
				<button onClick={connectWallet}>Connect Wallet</button>
			)}
		</div>
	);
};

export { WalletConnect };
