<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('short_links', function (Blueprint $table) {
            $table->id();
            $table->string('uid')->nullable();
            $table->string('name');
            $table->string('short_link');
            $table->string('slug');
            $table->foreignId('user_id')->nullable()->constrained('users');
            $table->boolean('status')->default(0);
            $table->boolean('sensitive_content')->default(0);
            $table->json('items')->nullable();
            $table->json('appearance')->nullable();
            $table->json('branding')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('short_links');
    }
};
