# Implementation Plan - PrideWealth Mobile Web Port

The goal is to port the provided React Native code for "PrideWealth" (a fintech/cooperative app) into a functional React web application using Vite, Tailwind CSS, and Lucide icons. Since there is no database access, all data will be handled via local state and mocked for functionality.

## Scope Summary
- **Target Platform**: Web (Mobile-first responsive design).
- **Core Features**: Dashboard, Fund Transfer, Savings Plans, Loan Application, Account Management.
- **Persistence**: Temporary local state (session-based).
- **Styling**: Tailwind CSS (replacing React Native `StyleSheet`).
- **Icons**: Lucide-react (replacing `MaterialCommunityIcons`).

## Assumptions & Open Questions
- **Assumption**: The user wants a web-based "pwa-style" app that mimics the mobile experience provided in the code.
- **Assumption**: Navigation will be handled via a bottom navigation bar as seen in the RN code.
- **Open Question**: Should we implement a real router (react-router) or stay with simple conditional rendering as per the original snippet? *Decision: Use a simple state-based view switcher to stay close to the original logic, but structure it for easy future routing.*

## Affected Areas
- `src/App.tsx`: Main entry point and state management.
- `src/components/`: New components for various sections (Dashboard, Transfer, etc.).
- `src/index.css`: Global styles.

## Phases & Deliverables

### Phase 1: Foundation & Layout (frontend_engineer)
- Set up the main layout container with a mobile aspect ratio focus.
- Implement the bottom navigation bar and core state for `currentPage`.
- Port the basic theme colors from the RN `LinearGradient` and `StyleSheet`.

### Phase 2: Dashboard & Components (frontend_engineer)
- Create `Dashboard` component with:
    - Balance Card (using CSS gradients).
    - Quick Stats Grid.
    - Ajo Card (Cooperative savings).
    - Savings Progress bar.
    - Recent Activity list.
- Port sub-components: `QuickStatCard`, `TransactionItem`.

### Phase 3: Transactional Pages (frontend_engineer)
- Implement `TransferPage`: Recipient input, amount input, and "Continue" button with a success modal/alert.
- Port logic for simple balance deductions (purely in-memory for demo).

### Phase 4: Financial Products (frontend_engineer)
- Implement `SavingsPage`: Display cards for Seed, Growth, Premier, and Fixed Deposit plans.
- Implement `LoansPage`: Loan requirements checklist and annual rate table.
- Implement Modals: `DepositModal`, `LoanModal`, `TransferModal`.

### Phase 5: Account & Polish (quick_fix_engineer)
- Implement `AccountPage`: Profile header, KYC level, and settings menu.
- Add "Pull to refresh" simulation and loading spinners (ActivityIndicator equivalents).
- Finalize Tailwind styling to ensure it looks "premium" and mobile-native.
- Ensure all Lucide icons match the intent of the original Material icons.

## Constraints
- No external database (Supabase/Postgres).
- All alerts and prompts will use a custom UI or standard `window.alert` where appropriate for simplicity, but preferably a Shadcn-like Toast/Alert system since they are available.