# Short paper describing the design of Intoo TV's Tokenomics

## Abstract 
Intoo TV's tokenomics includes:
1. XP Cards --> NFT Templates (ERC721)
2. Event Tickets --> NFT Tickets (ERC721) for a live broadcast (_Event_)
3. A Royalty-token --> RoyalXP, to reward XP Card designers 

**RoyalXP is the first Royalty+Reputation Token (and use-case) associated to live events.**

### Terms
- **Guest**: Users who design and mint a new Experience (XP). Each new XP is called XP Card, and it's publicly visible in the XP Market.
- **Experience (XP)**: An XP on Intoo TV platform - it comes in the form of an NFT called XP Card, minted on the Blockchain. At the moment of finalizing their XP Card, Guests have the option to "make it a template".
- **Template**: Every (NFT) XP Card that can be re-used by other guests. A Template XP is a Gen 0 NFT, an "Original"
- **Deverivatives**: Every XP Card customized starting from a Template (Gen 1+ NFT).
- **Host**: "Accept" to Broadcast a new XP by selecting and matching with XP Cards in the XP Market.
- **XP Tickets**: After Guests & Hosts match with each other, they both receive an NFT Ticket to access the live event and broadcast/stream the XP in real time.

## Tokenomics
### ɑ-Royals (v0.1, GR8 Hackathon)
- Only 500 ɑ-Royals (alpha Royal XPs) generated on Ethereum Blockchain.
- Each Guest will receive only 1 ɑ-Royal per usage.
- Usage will be determined for each Derivative XP Card minted on Matic, based on Original XP Card.
- Each creator will be able to receive up to 5 ɑ-Royals only. 
- After that (if Templates are used more than 5 times), they won't receive any additional ɑ-Royal.
- This will be part of “100 Creators” Private Beta release.

### b-RoyalXP (v.0.5 - hybrid, bonded)
- b-RoyalXPs (bonded) have limited supply of 1500 tokens.
- 500 are reserved to ɑ-Royals token-holders, and available to be swapped 1:1.

- The remaining 1000 are released following a basic bonding curve pegged on the usage of XP Templates, such as:  
(X = 1), (X+1 = X+50%)  
(i.e.:  
1st template usage: Original Guest receives 1 RoyalXP  
2nd template usage: Original Guest receives 1.5 RoyalXPs (1+50%)  
3rd template usage: Original Guest receives 1.875 RoyalXPs (1.5+25%))

- The curve of distribution goes on till full distribution of the 1000 b-RoyalXPs.
- After RoyalXP (see ___v.1.0___) deployment, b-RoyalXPs can be swapped for regular RoyalXPs following a reverse approach  
(i.e.: 1st Swap = 1:1, then 1:1-50%)
- Swap slots will have an upper limit of 3.375:3.375 (b-RoyalXP:RoyalXP) per swap.

### RoyalXP (v.1.0 - final config)
The final configuration of the **RoyalXP** (v.1.0) royalty token will work as follows: 
1. “*Originals*” (Gen 0 NFTs - Templates) **XP Cards** are minted as NFTs by an *Original* Guest (initial creator) on the Ethereum Blockchain.

2. “*Derivatives*” (Gen 1, …, Gen N NFTs) **XP Cards** are based on *Originals*, and are directly “bridged” and minted as NFTs on Matic, with lower transaction fees. 

3. Any time a new **Derivative XP Card** is *bridged* and *minted*, the *Original Guest* (XP Designer) receives an amount of royalties in **RoyalXP** tokens. 

4. RoyalXPs have __no cap__, and __no initial supply__. It's a “mine-able” (*inflationary*) ERC20-like token – generated in base of the duration of the *Derivative XP Card* (either 2, 5, or 10 minute **events**). 

5. Based on what mentioned above, Original Guest may receive either 2, 5, or 10 RoyalXPs **any time their Template is used**. 

6. RoyalXPs will be used to (i.) **tip Hosts** during the livestreaming event – and for other meaningful actions such as (ii.) exchanging them **for other NFTs**, or (iii.) **propose to “Join”** a 1-to-1 event. 
