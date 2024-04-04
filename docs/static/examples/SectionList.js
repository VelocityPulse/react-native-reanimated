import { FlashList } from '@shopify/flash-list';
import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const exampleStyles = StyleSheet.create({
  squaresContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  square: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: 'var(--swm-off-white)',
    borderRadius: 20,
  },
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  aboutItem: {
    backgroundColor: 'var(--swm-off-white)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
    padding: 8,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
});

const SECTION_HEIGHT = 350;

const BRAND_COLORS = [
  'var(--swm-red-light-80)',
  'var(--swm-purple-light-80)',
  'var(--swm-yellow-light-60)',
  'var(--swm-green-light-80)',
];

const SECTIONS = [
  {
    name: 'Overview',
    content: 'You can put here ✨ anything ✨ you want!',
  },
  {
    name: 'Squares',
    content: (
      <View style={exampleStyles.squaresContainer}>
        <View style={exampleStyles.square}>
          <Text>1</Text>
        </View>
        <View style={exampleStyles.square}>
          <Text>2</Text>
        </View>
        <View style={exampleStyles.square}>
          <Text>3</Text>
        </View>
      </View>
    ),
  },
  {
    name: 'Shopping list',
    content: (
      <View style={exampleStyles.aboutContainer}>
        <Text style={exampleStyles.aboutItem}>🍎 Apple </Text>
        <Text style={exampleStyles.aboutItem}>🍌 Banana</Text>
        <Text style={exampleStyles.aboutItem}>🥖 Bread</Text>
      </View>
    ),
  },
];

function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}

const useSelectedStyle = (selectedItem, item) =>
  useAnimatedStyle(() => ({
    fontWeight: selectedItem.value === item ? 600 : 400,
    borderBottomWidth: selectedItem.value === item ? '1px' : '0',
  }));

const TableOfContentsElement = ({
  item,
  index,
  visibleIndex,
  sectionCardsRef,
}) => {
  const style = useSelectedStyle(visibleIndex, index);

  return (
    <Pressable
      onPress={() => {
        sectionCardsRef.current?.scrollToIndex({ index, animated: true });
        visibleIndex.value = index;
      }}
      style={sectionListStyles.tableOfContentsElement}>
      <Animated.Text style={[style, sectionListStyles.tableOfContentsElement]}>
        {item}
      </Animated.Text>
    </Pressable>
  );
};

const TableOfContents = ({
  data,
  visibleIndex,
  sectionCardsRef,
  tableOfContentsRef,
}) => {
  return (
    <View style={sectionListStyles.tableOfContents}>
      <FlashList
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TableOfContentsElement
            item={item}
            visibleIndex={visibleIndex}
            index={index}
            sectionCardsRef={sectionCardsRef}
          />
        )}
        data={data}
        estimatedItemSize={52}
        ref={tableOfContentsRef}
      />
    </View>
  );
};

const SectionList = () => {
  const selectedItem = useSharedValue('');
  const sectionNames = SECTIONS.map((s) => s.name);
  const visibleIndex = useSharedValue(0);
  const sectionCardsRef = useRef(null);
  const tableOfContentsRef = useRef(null);

  return (
    <SafeAreaView style={sectionListStyles.cardsContainer}>
      <TableOfContents
        selectedItem={selectedItem}
        data={sectionNames}
        visibleIndex={visibleIndex}
        sectionCardsRef={sectionCardsRef}
        tableOfContentsRef={tableOfContentsRef}
      />
      <SectionCards
        sections={SECTIONS}
        visibleIndex={visibleIndex}
        tableOfContentsRef={tableOfContentsRef}
        sectionCardsRef={sectionCardsRef}
      />
    </SafeAreaView>
  );
};

const sectionListStyles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 600,
  },
  flex: {
    flex: 1,
  },
  tableOfContentsElement: {
    padding: 4,
    color: 'var(--swm-navy-light-100)',
    marginHorizontal: 4,
    borderBottomColor: 'var(--swm-navy-light-100)',
    margin: 8,
    overflow: 'hidden',
  },
  tableOfContents: {
    top: 0,
  },
});

// TODO: add react-native to xcode
// TODO: change way of defining in what sections we are -> like in landing page

const SectionCards = ({
  sections,
  visibleIndex,
  sectionCardsRef,
  tableOfContentsRef,
}) => {
  const heights = sections.map((_) => SECTION_HEIGHT);

  const getOffsetStarts = () =>
    heights.map((v, i) => heights.slice(0, i).reduce((x, acc) => x + acc, 0));

  const onScroll = (event) => {
    const offset = event.nativeEvent?.contentOffset?.y;

    if (offset !== undefined) {
      const distancesFromTop = getOffsetStarts().map((v) =>
        Math.abs(v - offset)
      );
      const newIndex = distancesFromTop.indexOf(
        Math.min.apply(null, distancesFromTop)
      );
      if (visibleIndex.value !== newIndex) {
        tableOfContentsRef.current?.scrollToIndex({
          index: newIndex,
          animated: true,
        });
      }
      visibleIndex.value = newIndex;
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Text style={sectionCardStyles.header}> {item.name}</Text>
        <SectionCardsElement>
          <Text style={sectionCardStyles.content}>{item.content}</Text>
        </SectionCardsElement>
      </View>
    );
  };

  return (
    <View style={sectionListStyles.flex}>
      <FlashList
        ref={sectionCardsRef}
        estimatedFirstItemOffset={0}
        renderItem={renderItem}
        data={sections}
        onScrollBeginDrag={onScroll}
        onScrollEndDrag={onScroll}
        onScroll={debounce(onScroll)}
        onMomentumScrollBegin={onScroll}
        onMomentumScrollEnd={onScroll}
      />
    </View>
  );
};

const getRandomBrandColor = () => {
  const colorIndex = Math.floor(Math.random() * BRAND_COLORS.length);
  return BRAND_COLORS[colorIndex];
};

const SectionCardsElement = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState(getRandomBrandColor());

  return (
    <View style={[sectionCardStyles.container, { backgroundColor }]}>
      {children}
      <Pressable
        style={sectionCardStyles.button}
        onPress={() => setBackgroundColor(getRandomBrandColor())}>
        <Text style={sectionCardStyles.buttonText}>
          Toggle section color 🎨
        </Text>
      </Pressable>
    </View>
  );
};

const sectionCardStyles = StyleSheet.create({
  container: {
    height: SECTION_HEIGHT,
    margin: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 24,
  },
  header: {
    color: 'var(--swm-navy-light-100)',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    color: 'var(--swm-navy-light-100)',
  },
  button: {
    backgroundColor: 'var(--swm-off-white)',
    padding: 12,
    borderRadius: 48,
  },
  buttonText: {
    color: 'var(--swm-navy-light-100)',
    padding: '0.5rem',
  },
});

export default SectionList;
