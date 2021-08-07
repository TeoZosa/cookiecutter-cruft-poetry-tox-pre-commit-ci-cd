window.BENCHMARK_DATA = {
  "lastUpdate": 1628304017110,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "4b7a89a66b99bdfdc99ee1a4e7c50a943e322fcb",
          "message": "Merge pull request #272 from TeoZosa/expand-test-harness-to-cover-all-supported-platforms-and-python-versions\n\n👷‍♂️Expand Test Harness to Cover All Supported Platforms and Python Versions",
          "timestamp": "2021-08-07T02:34:39Z",
          "tree_id": "6498038b402cb63dd996e87ab4dd1f7792b3fed9"
        },
        "date": 1628304015012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15855.046458596284,
            "unit": "iter/sec",
            "range": "stddev: 0.000007086305061998758",
            "extra": "mean: 63.07140143747863 usec\nrounds: 5565"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5000487.22709904,
            "unit": "iter/sec",
            "range": "stddev: 9.687878963214863e-9",
            "extra": "mean: 199.9805128149337 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14598.012885418086,
            "unit": "iter/sec",
            "range": "stddev: 0.000012066805443091654",
            "extra": "mean: 68.50247412775593 usec\nrounds: 9141"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 149915.71022395775,
            "unit": "iter/sec",
            "range": "stddev: 3.899877934903953e-7",
            "extra": "mean: 6.670414985234762 usec\nrounds: 39999"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16643.026218107236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042840821708685346",
            "extra": "mean: 60.08522650237868 usec\nrounds: 14225"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4960012.140821617,
            "unit": "iter/sec",
            "range": "stddev: 1.172991278866773e-8",
            "extra": "mean: 201.61240972964248 nsec\nrounds: 175439"
          }
        ]
      }
    ]
  }
}