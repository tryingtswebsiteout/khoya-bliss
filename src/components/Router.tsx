import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import { WixServicesProvider, MiniCart } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ProductDetailsRoute, productRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/product-details';
import { StoreCollectionRoute, storeCollectionRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';
import { rootRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/root';

import HomePage from '@/components/pages/HomePage';
import OurStoryPage from '@/components/pages/OurStoryPage';
import ContactPage from '@/components/pages/ContactPage';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Main Layout component with Header and Footer
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Layout wrapper with WixServicesProvider and ScrollToTop
function Layout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <MainLayout />
    </WixServicesProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: '/store',
        element: <></>,
        loader: defaultStoreCollectionRouteRedirectLoader,
      },
      {
        path: '/store/:categorySlug',
        element: (
          <div className="w-full max-w-[120rem] mx-auto px-4 py-8">
            <h1 className="font-heading text-5xl md:text-6xl text-primary mb-8 text-center">Order Your Batch</h1>
            <StoreCollectionRoute productPageRoute="/products" />
          </div>
        ),
        loader: storeCollectionRouteLoader,
        routeMetadata: {
          appDefId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          pageIdentifier: "wix.stores.sub_pages.category",
          identifiers: {
            categorySlug: "STORES.CATEGORY.SLUG"
          }
        }
      },
      {
        path: '/products/:slug',
        element: (
          <div className="w-full max-w-[120rem] mx-auto px-4 py-8">
            <ProductDetailsRoute />
          </div>
        ),
        loader: productRouteLoader,
        routeMetadata: {
          appDefId: "1380b703-ce81-ff05-f115-39571d94dfcd",
          pageIdentifier: "wix.stores.sub_pages.product",
          identifiers: {
            slug: "STORES.PRODUCT.SLUG"
          }
        },
      },
      {
        path: '/cart',
        element: (
          <div className="w-full max-w-[120rem] mx-auto px-4 py-8">
            <h1 className="font-heading text-5xl md:text-6xl text-primary mb-8 text-center">Your Sweet Selection</h1>
            <Cart />
          </div>
        ),
      },
      {
        path: '/our-story',
        element: <OurStoryPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
