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
        Schema::create('visitors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('short_link_id')->nullable()->constrained('short_links');
            $table->string('ip_address')->nullable();
            $table->string('country_code')->nullable();
            $table->string('country')->nullable();
            $table->string('status')->nullable();
            $table->string('city')->nullable();
            $table->string('zip')->nullable();
            $table->string('lat')->nullable();
            $table->string('lon')->nullable();
            $table->string('timezone')->nullable();
            $table->string('isp')->nullable();
            $table->string('as')->nullable();
            $table->string('region')->nullable();
            $table->string('browser')->nullable();
            $table->string('platform')->nullable();
            $table->string('platform_family')->nullable();
            $table->string('platform_version')->nullable();
            $table->string('device')->nullable();
            $table->string('device_model')->nullable();
            $table->string('device_family')->nullable();
            $table->string('mobile_grade')->nullable();
            $table->string('referrer')->nullable();
            $table->string('referrer_domain')->nullable();
            $table->string('referrer_path')->nullable();
            $table->integer('clicks')->unsigned()->default(0);
            $table->integer('vistor')->unsigned()->default(0);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visitors');
    }
};
