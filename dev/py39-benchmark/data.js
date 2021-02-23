window.BENCHMARK_DATA = {
  "lastUpdate": 1614089658546,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4fcae95e5006cc82f061851a5b97d152ce29f36f",
          "message": "Merge pull request #82 from TeoZosa/dependabot/github_actions/actions/setup-node-v2.1.5",
          "timestamp": "2021-02-23T14:09:48Z",
          "tree_id": "9ae98bf72e4d2a52809a257ce5b6575d2826a2cb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/4fcae95e5006cc82f061851a5b97d152ce29f36f"
        },
        "date": 1614089657014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14837.485149050144,
            "unit": "iter/sec",
            "range": "stddev: 0.000035653859915988106",
            "extra": "mean: 67.39686611002386 usec\nrounds: 12936"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4190079.7804927584,
            "unit": "iter/sec",
            "range": "stddev: 3.40109695864315e-8",
            "extra": "mean: 238.65894025581724 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13249.66216616276,
            "unit": "iter/sec",
            "range": "stddev: 0.000018100093505379606",
            "extra": "mean: 75.47362245611205 usec\nrounds: 9681"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 184668.2676091465,
            "unit": "iter/sec",
            "range": "stddev: 7.090776269611033e-7",
            "extra": "mean: 5.415115509268309 usec\nrounds: 42014"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15194.486322932515,
            "unit": "iter/sec",
            "range": "stddev: 0.000020545314876176318",
            "extra": "mean: 65.81334694353797 usec\nrounds: 13642"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4197461.867504596,
            "unit": "iter/sec",
            "range": "stddev: 4.831622468270554e-8",
            "extra": "mean: 238.2392101621397 nsec\nrounds: 5158"
          }
        ]
      }
    ]
  }
}