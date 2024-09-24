import { create } from "zustand";

const useStore = create (set => ({
    musics: [],
    books: [],
    movies: [],
    setMusic: (musics) => set({ musics }),
    setBooks: (books) => set({ books }),
    setMovies: (movies) => set({ movies }),
}))

export default useStore;
