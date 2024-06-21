import { ContentContainer, ContentWrapper } from './App.styles.ts';
import ProductManager from './components/ProductManager/ProductManager.tsx';

function App() {
    return (
        <ContentWrapper>
            <ContentContainer>
                <ProductManager />
            </ContentContainer>
        </ContentWrapper>
    );
}

export default App;
