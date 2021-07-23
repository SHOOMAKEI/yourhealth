<?php

namespace App\Http\Controllers\VerifiedServiceProvider;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HealthEducationController extends Controller
{
    public function index(): Response
    {
//        dd(Article::where('author', auth()->user()->id)->get());
        return Inertia::render(
            'VerifiedServiceProviders/HealthEducation/MyArticle',
            ['articles' => Article::where('author', auth()->user()->id)->get()]
        );
    }

    public function create()
    {
        return Inertia::render('VerifiedServiceProviders/HealthEducation/Create', [
            'tags' => Tag::all()->map(function ($query) {
                $data['id'] = $query->id;
                $data['text'] = $query->name;

                return $data;
            })]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'cover_image' => [ 'base64image'],
            'body' => ['required', 'string'],
            'tags.*.id' => ['required'],
            'tags.*.text' => ['required']
        ]);

        $post = Article::create([
            'title' => $request['title'],
            'body' => $request['body'],
            'author' => auth()->user()->id
        ]);

        foreach ($request['tags'] as $tag) {
            if (is_numeric($tag['id']) && is_null(Tag::find($tag['id']))) {
                $tag_data = Tag::create([
                    'name' => $tag['text']
                ]);
                $post->syncWithoutDetach($tag_data);
            }

            $tag_data = Tag::create([
                'name' =>$tag['text']
            ]);
            $post->tags()->sync($tag_data);
        }

        if (!empty($request['cover_image'])) {
            $this->updateCoverImage($post, $request->toArray());
        }

        return redirect()->route('health_education.index')->with(['status' => 'Operation Complete successful']);
    }

    /**
     * @throws \Spatie\MediaLibrary\MediaCollections\Exceptions\FileCannotBeAdded
     * @throws \Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist
     * @throws \Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig
     * @throws \Spatie\MediaLibrary\MediaCollections\Exceptions\InvalidBase64Data
     * @throws \Exception
     */
    public function updateCoverImage(Article $article, array $request): Article
    {
        $explode = explode(',', $request['cover_image']);
        $format = str_replace(
            [
                'data:image/',
                ';',
                'base64',
            ],
            [
                '', '', '',
            ],
            $explode[0]
        );
        $article->clearMediaCollection('article-cover-image');
        $article->addMediaFromBase64($request['cover_image'], 'image/'.$format)
            ->usingFileName(str_replace(' ', '-', rand(1111, 9999) . '-' . rand(1111, 9999) . '-' . strtolower(sha1(crypt(uniqid(), random_int(1000000, 9999999)))) . '-photo'  . '.'.$format))
            ->toMediaCollection('article-cover-image');

        return $article;
    }

    public function show(Article $article)
    {
        $data['id'] = $article->id;
        $data['title'] = $article->title;
        $data['body'] = $article->body;
        $data['request_publication'] = $article->request_publication;
        $data['is_published'] = $article->is_published;
        $data['cover_image'] = $article->cover_image;
        $data['author'] = $article->article_author;
        $data['created_at'] = $article->created_at->diffForHumans();
        $data['tags'] = $article->tags;
        $data['comments'] = $article->comments;
        $data['comments_count'] = $article->comments_count;
        $data['likes_count'] = $article->likes_count;
        $data['published_at'] = $article->published_at;

        // dd($data);

        return Inertia::render('VerifiedServiceProviders/HealthEducation/View', ['article' => $data]);
    }

}
